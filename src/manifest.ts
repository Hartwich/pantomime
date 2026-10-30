import { pantomimeText } from "./catalogText.js";
import type { GameManifest } from "@open-party-lab/game-core";
const rules = {
  de: [
    { title: "Kurze Begriffe & Klickpause", lines: ["Alle Begriffe bestehen aus höchstens zwei Wörtern.", "Nach einem Treffer sieht die ratende Person den Begriff zwei Sekunden lang auf dem Handy. Erraten ist für alle und Weiter für den Darsteller währenddessen gesperrt.", "Auch nach Weiter gilt eine Zwei-Sekunden-Sperre für Erraten und Weiter. Die Rundenzeit läuft unverändert weiter."] },
    { title: "Zug & Begriffe", lines: ["Der Darsteller deckt den ersten Begriff auf. Erst dann beginnt seine eingestellte Zeit (Standard: 60 Sekunden).", "Keine Begriffsauswahl: Nach einem Treffer erscheint sofort der nächste Begriff. Nur Gesten, keine Worte, Geräusche oder Buchstaben.", "Weiter überspringt einen Begriff. Das Kontingent (Standard: 3) gilt für den ganzen Darsteller-Zug und wird durch Treffer nicht aufgefüllt."] },
    { title: "Solo & Teams", lines: ["Solo: Alle außer dem Darsteller raten laut. Wer richtig geraten hat, drückt Erraten. Die erste gültige Meldung beansprucht den Begriff.", "Solo-Wertung: je 1 Punkt für den Darsteller und die richtig ratende Person pro bestätigtem Begriff.", "Teams: Zwei Teams nach Beitrittsreihenfolge (abwechselnd Team 1 und 2). Die Teams wechseln sich ab; innerhalb des Teams wechseln die Darsteller. Nur das aktive Team rät und darf Erraten drücken. Jeder Treffer zählt 1 Teampunkt."] },
    { title: "Prüfen & weitergeben", lines: ["Nach Zeitablauf bleiben alle Begriffe mit Zuordnung auf Host und Handys sichtbar. Der Darsteller kann Treffer zurücknehmen oder einer anderen berechtigten Person zuordnen.", "Auch übersprungene oder bei Zeitablauf offene Begriffe können nachträglich zugeordnet werden. Die Punkte werden sofort korrigiert.", "Nur der Darsteller bestätigt mit Weiter den Wechsel. Die nächste Person startet ihre Zeit erst durch Aufdecken. Punkte gelten nur für dieses Spiel."] }
  ],
  en: [
    { title: "Short prompts & click cooldown", lines: ["All prompts contain at most two words.", "After a correct claim, the guesser sees the solved word on their phone for two seconds. Guessed is locked for everyone and Next is locked for the actor during this time.", "Skipping also locks Guessed and Next for two seconds. The round clock continues unchanged."] },
    { title: "Turn & words", lines: ["The actor reveals the first word to start their configured time (default: 60 seconds).", "No word choices: each claimed answer immediately brings the next word. Gestures only; no talking, sounds or spelling.", "Next skips a word. The skip allowance (default: 3) applies to the whole actor turn and is not replenished by correct guesses."] },
    { title: "Solo & teams", lines: ["Solo: everyone except the actor guesses out loud. The correct guesser taps Guessed. The first valid claim gets the word.", "Solo scoring: 1 point each for the actor and correct guesser per confirmed word.", "Teams: two teams by alternating join order. Teams take turns, rotating their actors. Only the active team guesses and can claim words. Each correct word earns 1 team point."] },
    { title: "Review & handover", lines: ["After time expires, all words and claims stay visible on host and phones. The actor may revoke claims or assign them to another eligible player.", "Skipped and unfinished words can also be assigned during review. Scores update immediately.", "Only the actor confirms the handover. The next actor starts their clock by revealing their first word. Scores belong only to this game."] }
  ]
} as const;
export const pantomimeManifest = {
  id: "pantomime",
  translations: pantomimeText, displayName: "Pantomime", description: "Begriffe ohne Worte darstellen, Treffer sammeln und gemeinsam prüfen.",
  minPlayers: 2, maxPlayers: 20,
  minPlayersBySetting: { settingKey: "pantomimeMode", values: { team: 4 } },
  hostView: "PantomimeHostScene", controllerView: "pantomime", controllerLayout: "social_party",
  scoreScope: "game", controllerChrome: { bare: true, hideScore: true },
  hostChrome: { hud: false },
  lobbySetup: {
    title: "Pantomime einrichten",
    fields: [
      { kind: "select", id: "mode", settingKey: "pantomimeMode", label: "Spielmodus", defaultValue: "solo",
        options: [
          { id: "solo", label: "Solo · jeder gegen jeden", description: "Alle außer dem Darsteller raten und beanspruchen ihre Treffer.", rules },
          { id: "team", label: "Teams", description: "Zwei Teams nach Beitrittsreihenfolge. Nur das aktive Team rät. Ab 4 Personen.", rules }
        ] },
      { kind: "select", id: "category", settingKey: "pantomimeWordCategory", label: "Begriffe", defaultValue: "standard",
        options: [
          { id: "standard", label: "U18", description: "124 familienfreundliche Begriffe.", rules },
          { id: "adult", label: "Ü18", description: "76 Erwachsenenbegriffe: Sex, Beziehungen und Nachtleben.", rules },
          { id: "all", label: "Alle", description: "U18 und Ü18 gemischt. Für erwachsene Gruppen.", rules }
        ] },
      { kind: "number", id: "duration", settingKey: "pantomimeDurationSeconds", label: "Sekunden pro Darsteller", min: 15, max: 300, step: 15, defaultValue: 60 },
      { kind: "number", id: "skips", settingKey: "pantomimeSkips", label: "Weiter pro Darsteller-Zug", min: 0, max: 10, step: 1, defaultValue: 3 }
    ]
  },
  supportsTeams: true, estimatedRoundDurationMs: 90_000,
  ownsScreens: ["round_intro", "result"],
  visual: { accent: "#9a6f8c", icon: "drama", eyebrow: "Acting" },
  audio: { track: { profile: "gentle", bpm: 112, rootMidi: 59, masterGain: 0.12 } }
} as const satisfies GameManifest;
export const manifest = pantomimeManifest;
