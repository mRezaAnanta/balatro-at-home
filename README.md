# Balatro At Home

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Todos

- [x] draw card
- [x] discarding button
- [x] deal cards button
- [x] card count logic
- [x] change from using api to use local logic for drawing card and stuff
- [x] add poker logic 
- [x] ability to select card to play
- [] ui and ux fix (with their sounds and stuff)
- [] for some reason the roundscore is undefined before you play card
- [] dynamically serve img from assets (learn it from astro.js)
- [] sort card based on their rank or suit button and logic
- [] start game windows
- [] windows for the game (blinds, ante, score, etc) on the left
- [] joker & special cards windows & logic
- [] money logic
- [] shop window after you finished every round
- [] seeded run (might have to make a local api)(preferably with django rest framework)

## References
- ante = levels (normal game consisted of 8 levels)
- round = blinds (each levels for normal game consisted of 3 rounds)
- hands and discards = how many times you can discard and deals cards
