import Phaser from "phaser";
import { pantomimeManifest } from "../manifest.js";
import type { PantomimeState } from "../protocol.js";
import { renderRoundScreens } from "./roundScreens.js";
import { bindPlatformTheme, tokens } from "./platformTheme.js";

interface HostAppStateLike {
  game?: { phase?: string; state?: unknown } | null;
  room?: { language?: "de" | "en" } | null;
}
interface HostClientLike {
  subscribe(callback: (state: HostAppStateLike) => void): () => void;
}

export class PantomimeHostScene extends Phaser.Scene {
  private unsubscribe?: () => void;
  private latest: HostAppStateLike = {};
  private timerLabel?: Phaser.GameObjects.Text;
  private lastSecond = -1;

  constructor() { super(pantomimeManifest.hostView); }

  create(): void {
    bindPlatformTheme(this.registry);
    const client = this.registry.get("hostClient") as HostClientLike;
    this.unsubscribe = client.subscribe((state) => {
      this.latest = state;
      this.render();
    });
    const resize = () => this.render();
    this.scale.on("resize", resize);
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.unsubscribe?.();
      this.unsubscribe = undefined;
      this.timerLabel = undefined;
      this.scale.off("resize", resize);
    });
  }

  private render(): void {
    this.timerLabel = undefined;
    this.children.removeAll(true);
    this.cameras.main.setBackgroundColor(tokens().color.surface);
    if (renderRoundScreens(this, this.latest)) return;
    const state = (this.latest.game?.state ?? {}) as Partial<PantomimeState>;
    const en = this.latest.room?.language === "en";
    const { width, height } = this.scale;
    const scale = Math.min(width / 1100, height / 700);
    const text = (y: number, content: string, size: number, soft = false) => this.add.text(
      width / 2, height * y, content, {
        fontFamily: tokens().font.display,
        fontSize: `${size * scale}px`,
        color: soft ? tokens().color.textSoft : tokens().color.text,
        align: "center",
        wordWrap: { width: width * 0.86 },
        resolution: Math.min(window.devicePixelRatio || 1, 3)
      }
    ).setOrigin(0.5);
    text(0.12, `${state.actorName ?? "…"} ${en ? "is acting" : "ist dran"}`, 38, true);
    this.timerLabel = text(0.4, "", 150);
    this.lastSecond = -1;
    this.update();
    if (state.revealedTerm) {
      text(0.65, en ? "Guessed!" : "Erraten!", 28, true);
      text(0.77, state.revealedTerm, 64);
    } else {
      text(0.75, en ? "Guess out loud" : "Ratet laut mit", 32, true);
    }
  }

  update(): void {
    if (!this.timerLabel) return;
    const state = (this.latest.game?.state ?? {}) as Partial<PantomimeState>;
    const seconds = Math.max(0, Math.ceil(((state.finishAt ?? Date.now()) - Date.now()) / 1000));
    if (seconds === this.lastSecond) return;
    this.lastSecond = seconds;
    this.timerLabel.setText(`${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`);
  }
}

export const hostGame = {
  id: pantomimeManifest.id,
  displayName: pantomimeManifest.displayName,
  sceneKey: pantomimeManifest.hostView,
  scene: PantomimeHostScene
} as const;
