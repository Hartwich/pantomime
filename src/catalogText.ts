import type { LocalizedGameTextMap } from "@open-party-lab/game-core";

export const pantomimeText = {
  "de": {
    "displayName": "Pantomime",
    "description": "Begriffe ohne Worte darstellen, Treffer sammeln und gemeinsam prüfen.",
    "lobbySetup": {
      "title": "Pantomime einrichten",
      "fields": {
        "mode": {
          "label": "Spielmodus"
        },
        "category": {
          "label": "Begriffe"
        },
        "duration": {
          "label": "Sekunden pro Darsteller"
        },
        "skips": {
          "label": "Weiter pro Darsteller-Zug"
        }
      }
    },
    "visual": {
      "eyebrow": "Schauspiel"
    }
  },
  "en": {
    "displayName": "Charades",
    "description": "Act out words, claim correct guesses and review them together.",
    "lobbySetup": {
      "title": "Set up Charades",
      "fields": {
        "mode": {
          "label": "Game mode",
          "options": {
            "solo": {
              "label": "Free-for-all",
              "description": "Everyone except the actor guesses and claims their own correct answers."
            },
            "team": {
              "label": "Teams",
              "description": "Two teams alternate by join order. Only the active team guesses. Requires at least 4 players."
            }
          }
        },
        "category": {
          "label": "Words",
          "options": {
            "standard": {
              "label": "Family",
              "description": "124 family-friendly prompts."
            },
            "adult": {
              "label": "18+",
              "description": "76 adult prompts about sex, relationships and nightlife."
            },
            "all": {
              "label": "All",
              "description": "Family and adult prompts mixed together. For adult groups."
            }
          }
        },
        "duration": {
          "label": "Seconds per actor"
        },
        "skips": {
          "label": "Skips per actor turn"
        }
      }
    },
    "visual": {
      "eyebrow": "Acting"
    }
  }
} as const satisfies LocalizedGameTextMap;
