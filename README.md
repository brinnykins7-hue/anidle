# 🎮 ANIDLE – Guess the Anime Character

A **Wordle-style anime character guessing game** — no backend, no install, pure HTML/CSS/JS. Play it in any browser.

## ✨ Features

- **500+ characters** across 100+ anime series
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
