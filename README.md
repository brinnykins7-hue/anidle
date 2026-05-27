# 🎮 ANIDLE – Guess the Anime Character

A **Wordle-style anime character guessing game** — no backend, no install, pure HTML/CSS/JS. Play it in any browser.

## ✨ Features

- **390+ characters** across 50+ anime series
- **Series selector with search** — start with all series unselected, toggle the ones you want
- **Live "Selected Series" sidebar** shows what's in your pool with character counts
- **Color-coded feedback** after every guess:
  - 🟢 **Green** — exact match
  - 🟡 **Yellow** — close (age/height within 15%; hair/eyes share a color)
  - 🔴 **Red** — wrong
- **↑ ↓ arrows** on age and height tell you which direction to guess
- **Autocomplete** search — type and pick from your pool
- **20 attempts** per game
- **Dark blue theme**, clean Arial font

## 📺 Anime Genres Covered

| Genre | Examples |
|---|---|
| Action / Shonen | Naruto, One Piece, Dragon Ball Z, Bleach, Demon Slayer, Black Clover, Fairy Tail |
| Psychological | Death Note, Code Geass, Classroom of the Elite, Mob Psycho 100, The Promised Neverland |
| Isekai | Re:Zero, Overlord, Sword Art Online, KonoSuba, Shield Hero, Mushoku Tensei, Slime |
| Romance | Toradora, Your Lie in April, Kaguya-sama, OreGairu, Violet Evergarden |
| Sci-Fi / Thriller | Steins;Gate, Evangelion, Chainsaw Man, Tokyo Ghoul, Black Butler |
| Sports | Haikyuu, Blue Lock |
| Adventure | Hunter x Hunter, Frieren, Made in Abyss, Dr. Stone, Assassination Classroom |
| Music / Slice of Life | Bocchi the Rock, Food Wars, Durarara |
| Dark Fantasy | Goblin Slayer, Akame ga Kill, Seraph of the End, Vinland Saga |

## 🚀 Deploy to GitHub Pages (5 minutes)

1. Go to [github.com](https://github.com) → **New repository** → name it `anidle`
2. Upload all files: `index.html`, `style.css`, `game.js`, `data.js`, `README.md`, `LICENSE`, `.gitignore`
3. Go to **Settings → Pages → Source: main branch / root**
4. Click **Save** → live in ~1 minute at `https://yourusername.github.io/anidle`

## 📁 Files

```
anidle/
├── index.html    HTML shell & layout
├── style.css     Dark blue theme (Arial font)
├── game.js       All game logic
├── data.js       390+ character database
├── README.md     This file
├── LICENSE       MIT
└── .gitignore
```

## ➕ Adding Characters

Edit `data.js` and follow the format:

```js
{ name: "Character Name", series: "Series Name", age: 17, height: 170, gender: "M", hair: "black", eyes: "blue" },
```

- `gender`: `"M"` or `"F"`
- `hair` / `eyes`: lowercase color names; multiple colors comma-separated: `"black,red"`
- The `ALL_SERIES` array is auto-generated from the data — no extra step needed

## 📜 License

MIT — see [LICENSE](LICENSE)
