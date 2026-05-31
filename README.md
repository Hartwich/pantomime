# Open Party Lab: Pantomime

Pantomime is an Open Party Lab game package. One player acts out a secret term while everyone else guesses out loud in the room.

## Local Development

Recommended folder layout:

```text
Open-Party-Lab/
  local-games/
    pantomime/
```

Install and build this game:

```bash
npm install
npm run typecheck
npm run build
```

For local Platform integration, run this in the Party Platform repo:

```bash
cd ../..
npm run games:sync-local
npm run dev:all
```

The Platform links only game repos that exist locally. If this repo is not present, Pantomime is skipped.

## Public Entrypoints

```text
@open-party-lab/game-pantomime/manifest
@open-party-lab/game-pantomime/protocol
@open-party-lab/game-pantomime/server
@open-party-lab/game-pantomime/host
@open-party-lab/game-pantomime/controller
```

## Browser Note

Chromium-based browsers and Safari are recommended for phone controllers. Firefox may have issues around fullscreen, reconnect/session handling, or touch timing.
