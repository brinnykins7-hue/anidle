// ── ANIDLE GAME LOGIC ─────────────────────────────────────────────────────

const MAX_ATTEMPTS = 20;

// Genre → series mapping
const GENRES = [
  { icon: "⚔️",  name: "Action / Shonen",         series: ["Naruto","One Piece","Dragon Ball Z","Dragon Ball Super","Bleach","Black Clover","Fairy Tail","One Punch Man","Haikyuu","Blue Lock","Assassination Classroom","Akame ga Kill","Gurren Lagann","Gintama","Rurouni Kenshin","Shaman King","Zatch Bell","Blue Exorcist","Bungo Stray Dogs","Black Lagoon","Inuyasha"] },
  { icon: "🔮",  name: "Psychological / Thriller", series: ["Death Note","Code Geass","Evangelion","Classroom of the Elite","Mob Psycho 100","The Promised Neverland","Steins;Gate","Durarara","Kakegurui","Psycho-Pass","Erased","Banana Fish","Great Pretender","Devilman Crybaby"] },
  { icon: "🌀",  name: "Isekai / Fantasy",         series: ["Re:Zero","Overlord","Sword Art Online","KonoSuba","Shield Hero","Mushoku Tensei","That Time I Got Reincarnated as a Slime","No Game No Life","DanMachi","Miss Kobayashi's Dragon Maid","Is This a Zombie?"] },
  { icon: "💖",  name: "Romance / Slice of Life",  series: ["Toradora","Your Lie in April","Kaguya-sama","OreGairu","Violet Evergarden","Bocchi the Rock","Clannad","Fruits Basket","Ouran Host Club","Nana","Skip and Loafer","Angel Beats","Natsume's Book of Friends"] },
  { icon: "🦹",  name: "Superhero / Sci-Fi",       series: ["My Hero Academia","Fullmetal Alchemist","Chainsaw Man","Dr. Stone","Seraph of the End","Darling in the FranXX","Ghost in the Shell","The Melancholy of Haruhi Suzumiya","Cowboy Bebop"] },
  { icon: "⚙️",  name: "Dark / Horror",            series: ["Tokyo Ghoul","Black Butler","Made in Abyss","Goblin Slayer","Vinland Saga","Berserk","Dororo","Trigun"] },
  { icon: "🥷",  name: "Adventure / Fantasy",      series: ["Hunter x Hunter","Frieren","Attack on Titan","Demon Slayer","Jujutsu Kaisen","Food Wars","Golden Kamuy","Inuyasha"] },
  { icon: "🎭",  name: "Drama / Other",            series: ["Tokyo Revengers","Oshi no Ko","Sailor Moon","Cardcaptor Sakura","Slam Dunk","Haikyuu","Hajime no Ippo","Captain Tsubasa","Initial D","Samurai Champloo","Paradise Kiss","Nichijou"] },
];

let target      = null;
let attempts    = 0;
let gameOver    = false;
let selectedSeries = new Set();
let pool        = [];

// ─── DOM ──────────────────────────────────────────────────────────────────
const setupScreen  = document.getElementById('setup-screen');
const gameScreen   = document.getElementById('game-screen');
const genreListEl  = document.getElementById('genre-list');
const poolCount    = document.getElementById('pool-count');
const startBtn     = document.getElementById('start-btn');
const selectAllBtn = document.getElementById('select-all-btn');
const clearAllBtn  = document.getElementById('clear-all-btn');

const guessInput  = document.getElementById('guess-input');
const guessBtn    = document.getElementById('guess-btn');
const acList      = document.getElementById('autocomplete-list');
const guessTbody  = document.getElementById('guess-tbody');
const attemptsEl  = document.getElementById('attempts-used');
const guessMsg    = document.getElementById('guess-msg');
const backBtn     = document.getElementById('back-btn');
const gameSeriesList = document.getElementById('game-series-list');

const resultOverlay   = document.getElementById('result-overlay');
const resultEmoji     = document.getElementById('result-emoji');
const resultTitle     = document.getElementById('result-title');
const resultSub       = document.getElementById('result-sub');
const resultChar      = document.getElementById('result-char');
const playAgainBtn    = document.getElementById('play-again-btn');
const changeSeriesBtn = document.getElementById('change-series-btn');

// ─── BUILD GENRE ACCORDION ────────────────────────────────────────────────

function buildGenreList() {
  genreListEl.innerHTML = '';
  GENRES.forEach(function(genre, gi) {
    var block = document.createElement('div');
    block.className = 'genre-block';

    // Count how many in this genre are in DB
    var available = genre.series.filter(function(s) {
      return ANIME_DB.some(function(c) { return c.series === s; });
    });
    if (!available.length) return;

    var header = document.createElement('button');
    header.className = 'genre-header';
    header.innerHTML =
      '<span class="genre-label"><span class="genre-icon">' + genre.icon + '</span>' +
      genre.name + '<span class="genre-badge">' + available.length + ' series</span></span>' +
      '<span class="genre-arrow">▼</span>';

    var body = document.createElement('div');
    body.className = 'genre-body';

    available.forEach(function(s) {
      var charCount = ANIME_DB.filter(function(c) { return c.series === s; }).length;
      var tag = document.createElement('button');
      tag.className = 'series-tag';
      tag.textContent = s + ' (' + charCount + ')';
      tag.dataset.series = s;
      tag.addEventListener('click', function() { toggleSeries(s, tag); });
      body.appendChild(tag);
    });

    header.addEventListener('click', function() {
      var isOpen = body.classList.contains('open');
      body.classList.toggle('open', !isOpen);
      header.classList.toggle('open', !isOpen);
    });

    block.appendChild(header);
    block.appendChild(body);
    genreListEl.appendChild(block);
  });
  updatePoolCount();
}

function toggleSeries(series, el) {
  if (selectedSeries.has(series)) {
    selectedSeries.delete(series);
    el.classList.remove('selected');
  } else {
    selectedSeries.add(series);
    el.classList.add('selected');
  }
  updatePoolCount();
}

function updatePoolCount() {
  var chars = ANIME_DB.filter(function(c) { return selectedSeries.has(c.series); });
  poolCount.textContent = selectedSeries.size + ' series selected (' + chars.length + ' characters)';
  startBtn.disabled = selectedSeries.size === 0;
}

selectAllBtn.addEventListener('click', function() {
  document.querySelectorAll('.series-tag').forEach(function(tag) {
    selectedSeries.add(tag.dataset.series);
    tag.classList.add('selected');
  });
  updatePoolCount();
});

clearAllBtn.addEventListener('click', function() {
  selectedSeries.clear();
  document.querySelectorAll('.series-tag').forEach(function(tag) {
    tag.classList.remove('selected');
  });
  updatePoolCount();
});

startBtn.addEventListener('click', startGame);

// ─── GAME START ───────────────────────────────────────────────────────────

function startGame() {
  pool     = ANIME_DB.filter(function(c) { return selectedSeries.has(c.series); });
  target   = pool[Math.floor(Math.random() * pool.length)];
  attempts = 0;
  gameOver = false;

  guessTbody.innerHTML   = '';
  guessInput.value       = '';
  guessMsg.textContent   = '';
  attemptsEl.textContent = '0';
  resultOverlay.classList.add('hidden');

  // Populate side panel
  gameSeriesList.innerHTML = '';
  Array.from(selectedSeries).sort().forEach(function(s) {
    var li = document.createElement('li');
    li.textContent = s;
    gameSeriesList.appendChild(li);
  });

  showScreen('game');
  guessInput.focus();
}

function showScreen(name) {
  setupScreen.classList.remove('active');
  gameScreen.classList.remove('active');
  if (name === 'setup') setupScreen.classList.add('active');
  if (name === 'game')  gameScreen.classList.add('active');
}

backBtn.addEventListener('click', function() { showScreen('setup'); });

// ─── AUTOCOMPLETE ─────────────────────────────────────────────────────────
var acIndex = -1;

guessInput.addEventListener('input', function() {
  var q = guessInput.value.trim().toLowerCase();
  if (!q) { hideAC(); return; }

  var guessed = getGuessedNames();
  var matches = pool.filter(function(c) {
    return c.name.toLowerCase().includes(q) && !guessed.includes(c.name.toLowerCase());
  }).slice(0, 8);

  if (!matches.length) { hideAC(); return; }

  acList.innerHTML = '';
  acIndex = -1;
  matches.forEach(function(c) {
    var li = document.createElement('li');
    li.textContent = c.name + ' (' + c.series + ')';
    li.dataset.name = c.name;
    li.addEventListener('mousedown', function(e) {
      e.preventDefault();
      guessInput.value = c.name;
      hideAC();
    });
    acList.appendChild(li);
  });
  acList.classList.remove('hidden');
});

guessInput.addEventListener('keydown', function(e) {
  var items = acList.querySelectorAll('li');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    acIndex = Math.min(acIndex + 1, items.length - 1);
    items.forEach(function(li, i) { li.classList.toggle('active', i === acIndex); });
    if (items[acIndex]) guessInput.value = items[acIndex].dataset.name;
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    acIndex = Math.max(acIndex - 1, -1);
    items.forEach(function(li, i) { li.classList.toggle('active', i === acIndex); });
    if (acIndex >= 0 && items[acIndex]) guessInput.value = items[acIndex].dataset.name;
  } else if (e.key === 'Enter') { hideAC(); submitGuess(); }
    else if (e.key === 'Escape') { hideAC(); }
});

guessBtn.addEventListener('click', submitGuess);
document.addEventListener('click', function(e) {
  if (!e.target.closest('.autocomplete-wrap')) hideAC();
});

function hideAC() { acList.classList.add('hidden'); acIndex = -1; }

function getGuessedNames() {
  return Array.from(guessTbody.querySelectorAll('[data-guessname]')).map(function(td) {
    return td.dataset.guessname.toLowerCase();
  });
}

// ─── GUESS LOGIC ──────────────────────────────────────────────────────────

function submitGuess() {
  if (gameOver) return;
  var raw = guessInput.value.trim();
  if (!raw) { guessMsg.textContent = 'Type a character name first.'; return; }

  var guess = pool.find(function(c) { return c.name.toLowerCase() === raw.toLowerCase(); });
  if (!guess) { guessMsg.textContent = '"' + raw + '" not found. Try the autocomplete list.'; return; }

  if (getGuessedNames().includes(guess.name.toLowerCase())) {
    guessMsg.textContent = 'Already guessed that character!'; return;
  }

  guessMsg.textContent = '';
  attempts++;
  attemptsEl.textContent = attempts;
  guessInput.value = '';
  hideAC();
  renderRow(guess);

  var won = guess.name.toLowerCase() === target.name.toLowerCase();
  if (won || attempts >= MAX_ATTEMPTS) {
    gameOver = true;
    setTimeout(function() { showResult(won); }, 500);
  }
}

function renderRow(guess) {
  var tr = document.createElement('tr');

  var numTd = document.createElement('td');
  numTd.textContent = attempts;
  tr.appendChild(numTd);

  var nameTd = makeCell(guess.name, colorFor('name', guess));
  nameTd.dataset.guessname = guess.name;
  tr.appendChild(nameTd);

  tr.appendChild(makeCell(guess.series, colorFor('series', guess)));
  tr.appendChild(makeCell(guess.age + arrowFor(guess.age, target.age), colorFor('age', guess)));
  tr.appendChild(makeCell(guess.height + arrowFor(guess.height, target.height), colorFor('height', guess)));
  tr.appendChild(makeCell(guess.gender === 'M' ? 'Male' : 'Female', colorFor('gender', guess)));
  tr.appendChild(makeCell(guess.hair, colorFor('hair', guess)));
  tr.appendChild(makeCell(guess.eyes, colorFor('eyes', guess)));

  guessTbody.insertBefore(tr, guessTbody.firstChild);
}

function makeCell(text, cls) {
  var td = document.createElement('td');
  var d  = document.createElement('div');
  d.className = 'cell-inner ' + cls;
  d.textContent = text;
  td.appendChild(d);
  return td;
}

function colorFor(field, guess) {
  switch (field) {
    case 'name':    return guess.name.toLowerCase() === target.name.toLowerCase() ? 'cell-green' : 'cell-red';
    case 'series':  return guess.series === target.series ? 'cell-green' : 'cell-red';
    case 'gender':  return guess.gender === target.gender ? 'cell-green' : 'cell-red';
    case 'age': case 'height': {
      var gv = guess[field], tv = target[field];
      if (gv === tv) return 'cell-green';
      if (Math.abs(gv - tv) / Math.max(tv, 1) <= 0.15) return 'cell-yellow';
      return 'cell-red';
    }
    case 'hair': case 'eyes': {
      var gc = guess[field].split(',').map(function(s){return s.trim().toLowerCase();});
      var tc = target[field].split(',').map(function(s){return s.trim().toLowerCase();});
      if (gc.length === tc.length && gc.every(function(c){return tc.includes(c);})) return 'cell-green';
      if (gc.some(function(c){return tc.includes(c);}) || tc.some(function(c){return gc.includes(c);})) return 'cell-yellow';
      return 'cell-red';
    }
  }
  return 'cell-red';
}

function arrowFor(gv, tv) {
  if (gv === tv) return '';
  return gv < tv ? ' ↑' : ' ↓';
}

// ─── RESULT ───────────────────────────────────────────────────────────────

function showResult(won) {
  resultEmoji.textContent = won ? '🎉' : '💀';
  resultTitle.textContent = won ? 'Correct!' : 'Game Over';
  resultTitle.style.color = won ? 'var(--green)' : 'var(--red)';
  resultSub.textContent   = won
    ? 'You got it in ' + attempts + ' attempt' + (attempts !== 1 ? 's' : '') + '!'
    : 'The character was…';
  resultChar.innerHTML =
    '<strong>' + target.name + '</strong>' +
    'Series: ' + target.series + '<br>' +
    'Age: ' + target.age + ' &nbsp;|&nbsp; Height: ' + target.height + ' cm<br>' +
    'Gender: ' + (target.gender === 'M' ? 'Male' : 'Female') +
    ' &nbsp;|&nbsp; Hair: ' + target.hair +
    ' &nbsp;|&nbsp; Eyes: ' + target.eyes;
  resultOverlay.classList.remove('hidden');
}

playAgainBtn.addEventListener('click', function() {
  resultOverlay.classList.add('hidden');
  startGame();
});
changeSeriesBtn.addEventListener('click', function() {
  resultOverlay.classList.add('hidden');
  showScreen('setup');
});

// ─── INIT ─────────────────────────────────────────────────────────────────
buildGenreList();// ── ANIDLE GAME LOGIC ─────────────────────────────────────────────────────

const MAX_ATTEMPTS = 20;

// Genre → series mapping
const GENRES = [
  { icon: "⚔️",  name: "Action / Shonen",         series: ["Naruto","One Piece","Dragon Ball Z","Dragon Ball Super","Bleach","Black Clover","Fairy Tail","One Punch Man","Haikyuu","Blue Lock","Assassination Classroom","Akame ga Kill","Gurren Lagann","Gintama","Rurouni Kenshin","Shaman King","Zatch Bell","Blue Exorcist","Bungo Stray Dogs","Black Lagoon","Inuyasha"] },
  { icon: "🔮",  name: "Psychological / Thriller", series: ["Death Note","Code Geass","Evangelion","Classroom of the Elite","Mob Psycho 100","The Promised Neverland","Steins;Gate","Durarara","Kakegurui","Psycho-Pass","Erased","Banana Fish","Great Pretender","Devilman Crybaby"] },
  { icon: "🌀",  name: "Isekai / Fantasy",         series: ["Re:Zero","Overlord","Sword Art Online","KonoSuba","Shield Hero","Mushoku Tensei","That Time I Got Reincarnated as a Slime","No Game No Life","DanMachi","Miss Kobayashi's Dragon Maid","Is This a Zombie?"] },
  { icon: "💖",  name: "Romance / Slice of Life",  series: ["Toradora","Your Lie in April","Kaguya-sama","OreGairu","Violet Evergarden","Bocchi the Rock","Clannad","Fruits Basket","Ouran Host Club","Nana","Skip and Loafer","Angel Beats","Natsume's Book of Friends"] },
  { icon: "🦹",  name: "Superhero / Sci-Fi",       series: ["My Hero Academia","Fullmetal Alchemist","Chainsaw Man","Dr. Stone","Seraph of the End","Darling in the FranXX","Ghost in the Shell","The Melancholy of Haruhi Suzumiya","Cowboy Bebop"] },
  { icon: "⚙️",  name: "Dark / Horror",            series: ["Tokyo Ghoul","Black Butler","Made in Abyss","Goblin Slayer","Vinland Saga","Berserk","Dororo","Trigun"] },
  { icon: "🥷",  name: "Adventure / Fantasy",      series: ["Hunter x Hunter","Frieren","Attack on Titan","Demon Slayer","Jujutsu Kaisen","Food Wars","Golden Kamuy","Inuyasha"] },
  { icon: "🎭",  name: "Drama / Other",            series: ["Tokyo Revengers","Oshi no Ko","Sailor Moon","Cardcaptor Sakura","Slam Dunk","Haikyuu","Hajime no Ippo","Captain Tsubasa","Initial D","Samurai Champloo","Paradise Kiss","Nichijou"] },
];

let target      = null;
let attempts    = 0;
let gameOver    = false;
let selectedSeries = new Set();
let pool        = [];

// ─── DOM ──────────────────────────────────────────────────────────────────
const setupScreen  = document.getElementById('setup-screen');
const gameScreen   = document.getElementById('game-screen');
const genreListEl  = document.getElementById('genre-list');
const poolCount    = document.getElementById('pool-count');
const startBtn     = document.getElementById('start-btn');
const selectAllBtn = document.getElementById('select-all-btn');
const clearAllBtn  = document.getElementById('clear-all-btn');

const guessInput  = document.getElementById('guess-input');
const guessBtn    = document.getElementById('guess-btn');
const acList      = document.getElementById('autocomplete-list');
const guessTbody  = document.getElementById('guess-tbody');
const attemptsEl  = document.getElementById('attempts-used');
const guessMsg    = document.getElementById('guess-msg');
const backBtn     = document.getElementById('back-btn');
const gameSeriesList = document.getElementById('game-series-list');

const resultOverlay   = document.getElementById('result-overlay');
const resultEmoji     = document.getElementById('result-emoji');
const resultTitle     = document.getElementById('result-title');
const resultSub       = document.getElementById('result-sub');
const resultChar      = document.getElementById('result-char');
const playAgainBtn    = document.getElementById('play-again-btn');
const changeSeriesBtn = document.getElementById('change-series-btn');

// ─── BUILD GENRE ACCORDION ────────────────────────────────────────────────

function buildGenreList() {
  genreListEl.innerHTML = '';
  GENRES.forEach(function(genre, gi) {
    var block = document.createElement('div');
    block.className = 'genre-block';

    // Count how many in this genre are in DB
    var available = genre.series.filter(function(s) {
      return ANIME_DB.some(function(c) { return c.series === s; });
    });
    if (!available.length) return;

    var header = document.createElement('button');
    header.className = 'genre-header';
    header.innerHTML =
      '<span class="genre-label"><span class="genre-icon">' + genre.icon + '</span>' +
      genre.name + '<span class="genre-badge">' + available.length + ' series</span></span>' +
      '<span class="genre-arrow">▼</span>';

    var body = document.createElement('div');
    body.className = 'genre-body';

    available.forEach(function(s) {
      var charCount = ANIME_DB.filter(function(c) { return c.series === s; }).length;
      var tag = document.createElement('button');
      tag.className = 'series-tag';
      tag.textContent = s + ' (' + charCount + ')';
      tag.dataset.series = s;
      tag.addEventListener('click', function() { toggleSeries(s, tag); });
      body.appendChild(tag);
    });

    header.addEventListener('click', function() {
      var isOpen = body.classList.contains('open');
      body.classList.toggle('open', !isOpen);
      header.classList.toggle('open', !isOpen);
    });

    block.appendChild(header);
    block.appendChild(body);
    genreListEl.appendChild(block);
  });
  updatePoolCount();
}

function toggleSeries(series, el) {
  if (selectedSeries.has(series)) {
    selectedSeries.delete(series);
    el.classList.remove('selected');
  } else {
    selectedSeries.add(series);
    el.classList.add('selected');
  }
  updatePoolCount();
}

function updatePoolCount() {
  var chars = ANIME_DB.filter(function(c) { return selectedSeries.has(c.series); });
  poolCount.textContent = selectedSeries.size + ' series selected (' + chars.length + ' characters)';
  startBtn.disabled = selectedSeries.size === 0;
}

selectAllBtn.addEventListener('click', function() {
  document.querySelectorAll('.series-tag').forEach(function(tag) {
    selectedSeries.add(tag.dataset.series);
    tag.classList.add('selected');
  });
  updatePoolCount();
});

clearAllBtn.addEventListener('click', function() {
  selectedSeries.clear();
  document.querySelectorAll('.series-tag').forEach(function(tag) {
    tag.classList.remove('selected');
  });
  updatePoolCount();
});

startBtn.addEventListener('click', startGame);

// ─── GAME START ───────────────────────────────────────────────────────────

function startGame() {
  pool     = ANIME_DB.filter(function(c) { return selectedSeries.has(c.series); });
  target   = pool[Math.floor(Math.random() * pool.length)];
  attempts = 0;
  gameOver = false;

  guessTbody.innerHTML   = '';
  guessInput.value       = '';
  guessMsg.textContent   = '';
  attemptsEl.textContent = '0';
  resultOverlay.classList.add('hidden');

  // Populate side panel
  gameSeriesList.innerHTML = '';
  Array.from(selectedSeries).sort().forEach(function(s) {
    var li = document.createElement('li');
    li.textContent = s;
    gameSeriesList.appendChild(li);
  });

  showScreen('game');
  guessInput.focus();
}

function showScreen(name) {
  setupScreen.classList.remove('active');
  gameScreen.classList.remove('active');
  if (name === 'setup') setupScreen.classList.add('active');
  if (name === 'game')  gameScreen.classList.add('active');
}

backBtn.addEventListener('click', function() { showScreen('setup'); });

// ─── AUTOCOMPLETE ─────────────────────────────────────────────────────────
var acIndex = -1;

guessInput.addEventListener('input', function() {
  var q = guessInput.value.trim().toLowerCase();
  if (!q) { hideAC(); return; }

  var guessed = getGuessedNames();
  var matches = pool.filter(function(c) {
    return c.name.toLowerCase().includes(q) && !guessed.includes(c.name.toLowerCase());
  }).slice(0, 8);

  if (!matches.length) { hideAC(); return; }

  acList.innerHTML = '';
  acIndex = -1;
  matches.forEach(function(c) {
    var li = document.createElement('li');
    li.textContent = c.name + ' (' + c.series + ')';
    li.dataset.name = c.name;
    li.addEventListener('mousedown', function(e) {
      e.preventDefault();
      guessInput.value = c.name;
      hideAC();
    });
    acList.appendChild(li);
  });
  acList.classList.remove('hidden');
});

guessInput.addEventListener('keydown', function(e) {
  var items = acList.querySelectorAll('li');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    acIndex = Math.min(acIndex + 1, items.length - 1);
    items.forEach(function(li, i) { li.classList.toggle('active', i === acIndex); });
    if (items[acIndex]) guessInput.value = items[acIndex].dataset.name;
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    acIndex = Math.max(acIndex - 1, -1);
    items.forEach(function(li, i) { li.classList.toggle('active', i === acIndex); });
    if (acIndex >= 0 && items[acIndex]) guessInput.value = items[acIndex].dataset.name;
  } else if (e.key === 'Enter') { hideAC(); submitGuess(); }
    else if (e.key === 'Escape') { hideAC(); }
});

guessBtn.addEventListener('click', submitGuess);
document.addEventListener('click', function(e) {
  if (!e.target.closest('.autocomplete-wrap')) hideAC();
});

function hideAC() { acList.classList.add('hidden'); acIndex = -1; }

function getGuessedNames() {
  return Array.from(guessTbody.querySelectorAll('[data-guessname]')).map(function(td) {
    return td.dataset.guessname.toLowerCase();
  });
}

// ─── GUESS LOGIC ──────────────────────────────────────────────────────────

function submitGuess() {
  if (gameOver) return;
  var raw = guessInput.value.trim();
  if (!raw) { guessMsg.textContent = 'Type a character name first.'; return; }

  var guess = pool.find(function(c) { return c.name.toLowerCase() === raw.toLowerCase(); });
  if (!guess) { guessMsg.textContent = '"' + raw + '" not found. Try the autocomplete list.'; return; }

  if (getGuessedNames().includes(guess.name.toLowerCase())) {
    guessMsg.textContent = 'Already guessed that character!'; return;
  }

  guessMsg.textContent = '';
  attempts++;
  attemptsEl.textContent = attempts;
  guessInput.value = '';
  hideAC();
  renderRow(guess);

  var won = guess.name.toLowerCase() === target.name.toLowerCase();
  if (won || attempts >= MAX_ATTEMPTS) {
    gameOver = true;
    setTimeout(function() { showResult(won); }, 500);
  }
}

function renderRow(guess) {
  var tr = document.createElement('tr');

  var numTd = document.createElement('td');
  numTd.textContent = attempts;
  tr.appendChild(numTd);

  var nameTd = makeCell(guess.name, colorFor('name', guess));
  nameTd.dataset.guessname = guess.name;
  tr.appendChild(nameTd);

  tr.appendChild(makeCell(guess.series, colorFor('series', guess)));
  tr.appendChild(makeCell(guess.age + arrowFor(guess.age, target.age), colorFor('age', guess)));
  tr.appendChild(makeCell(guess.height + arrowFor(guess.height, target.height), colorFor('height', guess)));
  tr.appendChild(makeCell(guess.gender === 'M' ? 'Male' : 'Female', colorFor('gender', guess)));
  tr.appendChild(makeCell(guess.hair, colorFor('hair', guess)));
  tr.appendChild(makeCell(guess.eyes, colorFor('eyes', guess)));

  guessTbody.insertBefore(tr, guessTbody.firstChild);
}

function makeCell(text, cls) {
  var td = document.createElement('td');
  var d  = document.createElement('div');
  d.className = 'cell-inner ' + cls;
  d.textContent = text;
  td.appendChild(d);
  return td;
}

function colorFor(field, guess) {
  switch (field) {
    case 'name':    return guess.name.toLowerCase() === target.name.toLowerCase() ? 'cell-green' : 'cell-red';
    case 'series':  return guess.series === target.series ? 'cell-green' : 'cell-red';
    case 'gender':  return guess.gender === target.gender ? 'cell-green' : 'cell-red';
    case 'age': case 'height': {
      var gv = guess[field], tv = target[field];
      if (gv === tv) return 'cell-green';
      if (Math.abs(gv - tv) / Math.max(tv, 1) <= 0.15) return 'cell-yellow';
      return 'cell-red';
    }
    case 'hair': case 'eyes': {
      var gc = guess[field].split(',').map(function(s){return s.trim().toLowerCase();});
      var tc = target[field].split(',').map(function(s){return s.trim().toLowerCase();});
      if (gc.length === tc.length && gc.every(function(c){return tc.includes(c);})) return 'cell-green';
      if (gc.some(function(c){return tc.includes(c);}) || tc.some(function(c){return gc.includes(c);})) return 'cell-yellow';
      return 'cell-red';
    }
  }
  return 'cell-red';
}

function arrowFor(gv, tv) {
  if (gv === tv) return '';
  return gv < tv ? ' ↑' : ' ↓';
}

// ─── RESULT ───────────────────────────────────────────────────────────────

function showResult(won) {
  resultEmoji.textContent = won ? '🎉' : '💀';
  resultTitle.textContent = won ? 'Correct!' : 'Game Over';
  resultTitle.style.color = won ? 'var(--green)' : 'var(--red)';
  resultSub.textContent   = won
    ? 'You got it in ' + attempts + ' attempt' + (attempts !== 1 ? 's' : '') + '!'
    : 'The character was…';
  resultChar.innerHTML =
    '<strong>' + target.name + '</strong>' +
    'Series: ' + target.series + '<br>' +
    'Age: ' + target.age + ' &nbsp;|&nbsp; Height: ' + target.height + ' cm<br>' +
    'Gender: ' + (target.gender === 'M' ? 'Male' : 'Female') +
    ' &nbsp;|&nbsp; Hair: ' + target.hair +
    ' &nbsp;|&nbsp; Eyes: ' + target.eyes;
  resultOverlay.classList.remove('hidden');
}

playAgainBtn.addEventListener('click', function() {
  resultOverlay.classList.add('hidden');
  startGame();
});
changeSeriesBtn.addEventListener('click', function() {
  resultOverlay.classList.add('hidden');
  showScreen('setup');
});

// ─── INIT ─────────────────────────────────────────────────────────────────
buildGenreList();
