import Phaser from "phaser";
import { pantomimeManifest } from "../manifest.js";

interface HostClientLike {
  subscribe(callback: (state: HostAppStateLike) => void): () => void;
}

interface HostAppStateLike {
  game?: {
    phase?: string;
    state?: unknown;
  } | null;
  room?: {
    language?: "de" | "en";
  } | null;
}

interface PantomimeHostState {
  actorName?: string;
  secretTerm?: string;
  finishAt?: number | null;
  message?: string;
}

const hostTheme = {
  panel: "#111827",
  titleFont: '"Space Grotesk", sans-serif',
  bodyFont: '"Nunito Sans", sans-serif'
};

export class PantomimeHostScene extends Phaser.Scene {
  private unsubscribe?: () => void;

  constructor() {
    super(pantomimeManifest.hostView);
  }

  create(): void {
    const client = this.registry.get("hostClient") as HostClientLike;

    this.unsubscribe = client.subscribe((state) => {
      const gameState = (state.game?.state ?? {}) as PantomimeHostState;
      const en = state.room?.language === "en";
      const now = Date.now();
      const secondsLeft = Math.max(0, Math.ceil(((gameState.finishAt ?? now) - now) / 1000));

      this.children.removeAll(true);
      this.cameras.main.setBackgroundColor(hostTheme.panel);

      this.add
        .text(this.scale.width * 0.5, 68, "Pantomime", {
          fontFamily: hostTheme.titleFont,
          fontSize: "64px",
          color: "#f8fafc"
        })
        .setOrigin(0.5, 0);

      this.add
        .text(
          this.scale.width * 0.5,
          160,
          gameState.message ?? (en ? "One player acts out a term." : "Ein Spieler stellt einen Begriff dar."),
          {
            fontFamily: hostTheme.bodyFont,
            fontSize: "30px",
            color: "#cbd5e1",
            align: "center",
            wordWrap: { width: this.scale.width - 140 }
          }
        )
        .setOrigin(0.5, 0);

      this.add
        .text(this.scale.width * 0.5, 290, `${en ? "Actor" : "Darsteller"}: ${gameState.actorName ?? "?"}`, {
          fontFamily: hostTheme.bodyFont,
          fontSize: "40px",
          color: "#fde047"
        })
        .setOrigin(0.5, 0);

      this.add
        .text(this.scale.width * 0.5, 365, gameState.secretTerm ?? "?", {
          fontFamily: hostTheme.titleFont,
          fontSize: "84px",
          color: "#86efac"
        })
        .setOrigin(0.5, 0);

      this.add
        .text(this.scale.width * 0.5, 495, `${en ? "Time" : "Zeit"}: ${secondsLeft}s`, {
          fontFamily: hostTheme.bodyFont,
          fontSize: "36px",
          color: "#f8fafc"
        })
        .setOrigin(0.5, 0);

      this.add
        .text(this.scale.width * 0.5, 560, en ? "Everyone else guesses out loud." : "Alle anderen raten laut.", {
          fontFamily: hostTheme.bodyFont,
          fontSize: "26px",
          color: "#cbd5e1"
        })
        .setOrigin(0.5, 0);
    });

    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.unsubscribe?.();
      this.unsubscribe = undefined;
    });
  }
}

export const hostGame = {
  id: pantomimeManifest.id,
  displayName: pantomimeManifest.displayName,
  sceneKey: pantomimeManifest.hostView,
  scene: PantomimeHostScene
} as const;
