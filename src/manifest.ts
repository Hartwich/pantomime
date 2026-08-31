import type { GameManifest } from "@open-party-lab/game-core";

export const pantomimeManifest = {
  id: "pantomime",
  displayName: "Pantomime",
  description: "Ein Spieler stellt einen Begriff dar, alle anderen raten.",
  minPlayers: 2,
  maxPlayers: 10,
  hostView: "PantomimeHostScene",
  controllerView: "pantomime",
  controllerLayout: "choice",
  supportsTeams: false,
  estimatedRoundDurationMs: 70_000,

  ownsScreens: ["round_intro", "result"],
  visual: { accent: "#9a6f8c", eyebrow: "Acting" },
  audio: { track: { profile: "gentle", bpm: 112, rootMidi: 59, masterGain: 0.12 } },
} as const satisfies GameManifest;

export const manifest = pantomimeManifest;
