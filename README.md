# ANIMEDLE

A browser-based anime guessing game — no server, no install, just open and play.

Guess a mystery **anime character** or **anime series** using colored clue cells after each attempt. Green means exact match, yellow means close, red means wrong. You get 20 tries.

> Based on the original [ANIMEDLE](https://github.com/brinnykins7-hue) by brinnykins7-hue.

---

## Game Modes

### 🧑‍🎤 Character Mode
Guess the mystery character. Each guess reveals clues across 7 attributes:

| Attribute | Yellow means… |
|-----------|--------------|
| Series | — |
| Age | Within ±15% |
| Height | Within ±15% |
| Gender | — |
| Hair color | Shares at least one color |
| Eye color | Shares at least one color |

### 📺 Series Mode
Guess the mystery anime series. Each guess reveals clues across 6 attributes:

| Attribute | Yellow means… |
|-----------|--------------|
| Studio | — |
| Year | Within ±15% |
| Genre | Shares a genre tag |
| Episodes | Within ±15% |
| Source material | — |
| MAL Score | Within ±15% |

---

## Features

- **Two game modes** — Character and Series
- **Customizable anime pool** — select which series to include, organized by genre
- **Autocomplete** — type-ahead search helps you find characters and series fast
- **Light & dark mode** — toggle persists across all pages
- **Game options** — hard mode, hide series column, search by series name, and more
- **Challenge mode** — create a custom puzzle and share it via link
- If you want to try out your own challenge for whatever reason and paste your link into the same tab as the one you made the link on, do a hard refresh so it reloads with ctrl + shift + r
- **No dependencies** — pure HTML, CSS, and vanilla JavaScript; runs entirely in the browser

---

## File Structure

```
animedle/
├── index.html        # Home page — choose game mode
├── character.html    # Character guessing game
├── series.html       # Series guessing game
├── style.css         # Shared styles + light/dark theme tokens
├── game.js           # Character game logic
├── series-game.js    # Series game logic
├── data.js           # Character database
└── series-data.js    # Series database

```

## Adding Characters or Series

**Characters** — open `data.js` and add an entry to `ANIME_DB`:

```js
{ name: "Character Name", series: "Series Name", age: "age in integer", height: "height in integer", gender: "gender in m or f", hair: "hair color", eyes: "eye color" },
```

**Series** — open `series-data.js` and add an entry to `SERIES_DB`:

```js
{ name: "Series Name", studio: "Studio Name", year: "year in int", episodes: "episode count in int", genre: "genre", source: "Manga", score: "score in float", status: "Finished", genreList: ["Action", "Adventure"] },
```

Valid values:
- `gender`: `"M"` or `"F"`
- `source`: `"Manga"`, `"Light Novel"`, `"Original"`, `"Game"`, `"Novel"`, `"Visual Novel"`
- `status`: `"Finished"`, `"Ongoing"`, `"Film"`

---

## Credits

Originally created by **brinnykins7-hue** as ANIMEDLE. This fork renames the project to ANIMEDLE and adds light/dark theme persistence across pages, a theme toggle on the home screen, and various quality-of-life improvements.
