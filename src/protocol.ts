import type { BaseRoundState, PlayerInput } from "@open-party-lab/game-core";

export interface PantomimeInput extends PlayerInput {
  type: "pantomime_guessed";
}

export interface PantomimeState extends BaseRoundState {
  actorPlayerId?: string;
  actorName?: string;
  secretTerm?: string;
  guessedAt?: number;
  revealedTerm?: string;
  finishAt: number | null;
}
