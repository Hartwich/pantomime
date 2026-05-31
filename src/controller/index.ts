import type { ControllerLayoutKey } from "@open-party-lab/game-core";
import { pantomimeManifest } from "../manifest.js";

interface ControllerGameRenderContext {
  state: {
    preferredLanguage?: "de" | "en";
    room?: {
      language?: "de" | "en";
    } | null;
    player?: {
      id: string;
    } | null;
    game?: {
      phase?: string;
      state?: unknown;
    } | null;
  };
}

interface PantomimeControllerState {
  actorPlayerId?: string;
  actorName?: string;
  secretTerm?: string;
  finishAt?: number | null;
}

function formatPhase(phase: string | undefined, language: "de" | "en" | undefined): string {
  const en = language === "en";

  switch (phase) {
    case "round_intro":
      return en ? "Round intro" : "Rundenstart";
    case "countdown":
      return en ? "Countdown" : "Countdown";
    case "playing":
      return en ? "Playing" : "Laeuft";
    case "locked":
      return en ? "Locked" : "Gesperrt";
    case "finished":
      return en ? "Finished" : "Beendet";
    default:
      return en ? "Waiting" : "Warten";
  }
}

export const controllerGame = {
  id: pantomimeManifest.id,
  layoutKey: "choice" as ControllerLayoutKey,
  buildLayout({ state }: ControllerGameRenderContext) {
    const language = state.room?.language ?? state.preferredLanguage;
    const en = language === "en";
    const pantomimeState = (state.game?.state ?? {}) as PantomimeControllerState;
    const isActor = state.player?.id === pantomimeState.actorPlayerId;
    const now = Date.now();
    const secondsLeft = Math.max(0, Math.ceil(((pantomimeState.finishAt ?? now) - now) / 1000));

    return {
      kind: "choice",
      title: isActor ? (en ? "Your turn!" : "Du bist dran!") : (en ? "Guess the term" : "Ratet den Begriff"),
      subtitle: formatPhase(state.game?.phase, language),
      helperText: isActor
        ? `${en ? "Act out" : "Stelle pantomimisch dar"}: ${pantomimeState.secretTerm ?? "?"}`
        : `${pantomimeState.actorName ?? (en ? "A player" : "Ein Spieler")} ${en ? "is acting. Guess out loud." : "spielt pantomimisch. Bitte laut raten."}`,
      disabled: true,
      choices: [
        {
          id: "pantomime-info",
          label: isActor ? (en ? "Act without words" : "Ohne Worte spielen") : (en ? "Only guess, do not act" : "Nur raten, nicht zeigen"),
          description: en ? "The game happens in the room, not on the phone." : "Das Spiel laeuft im Raum, nicht auf dem Handy.",
          disabled: true,
          onSelect: () => undefined
        }
      ],
      stats: [
        {
          label: en ? "Actor" : "Darsteller",
          value: pantomimeState.actorName ?? "?"
        },
        {
          label: en ? "Time" : "Zeit",
          value: `${secondsLeft}s`
        }
      ]
    };
  }
} as const;
