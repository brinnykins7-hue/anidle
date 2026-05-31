// ── ANIDLE GAME LOGIC ─────────────────────────────────────────────────────

const MAX_ATTEMPTS_NORMAL = 20;
const MAX_ATTEMPTS_HARD   = 10;

// Genre → series mapping
const GENRES = [
  // ── The undisputed GOATs ───────────────────────────────────────────────────
  { icon: "🏔️",  name: "Peak",
    series: [
      "Attack on Titan", "86", "Fullmetal Alchemist", "Steins;Gate",
      "Vinland Saga", "Frieren", "Hunter x Hunter", "Cowboy Bebop",
      "Gintama", "Berserk",
    ]
  },

  // ── Punches, powers, and power-ups ────────────────────────────────────────
  { icon: "⚔️",  name: "Action / Shonen",
    series: [
      "Naruto", "One Piece", "Dragon Ball Z", "Dragon Ball Super",
      "Bleach", "Black Clover", "Fairy Tail", "One Punch Man",
      "Assassination Classroom", "Akame ga Kill", "Gurren Lagann",
      "Rurouni Kenshin", "Shaman King", "Zatch Bell", "Blue Exorcist",
      "Bungo Stray Dogs", "Black Lagoon", "Inuyasha", "Demon Slayer",
      "Jujutsu Kaisen", "My Hero Academia", "Chainsaw Man",
      "Sword Art Online", "Samurai Champloo", "Yu Yu Hakusho",
      "D.Gray-man", "Soul Eater", "Katekyo Hitman Reborn",
      "Fullmetal Alchemist: Brotherhood",
    ]
  },

  // ── Mind games and dark twists ─────────────────────────────────────────────
  { icon: "🔮",  name: "Psychological / Thriller",
    series: [
      "Death Note", "Code Geass", "Evangelion", "Classroom of the Elite",
      "Mob Psycho 100", "The Promised Neverland", "Durarara", "Kakegurui",
      "Psycho-Pass", "Erased", "Banana Fish", "Great Pretender",
      "Devilman Crybaby", "Monster", "Paranoia Agent", "Serial Experiments Lain",
    ]
  },

  // ── Other worlds, other lives ──────────────────────────────────────────────
  { icon: "🌀",  name: "Isekai / Fantasy",
    series: [
      "Re:Zero", "Overlord", "KonoSuba", "Shield Hero", "Mushoku Tensei",
      "That Time I Got Reincarnated as a Slime", "No Game No Life",
      "DanMachi", "Miss Kobayashi's Dragon Maid", "Is This a Zombie?",
      "Spirited Away", "Princess Mononoke", "Nausicaä", "Castle in the Sky",
      "Log Horizon", "Tanya the Evil", "The Rising of the Shield Hero",
    ]
  },

  // ── Love, life, and feelings ───────────────────────────────────────────────
  { icon: "💖",  name: "Romance / Slice of Life",
    series: [
      "Toradora", "Your Lie in April", "Kaguya-sama", "OreGairu",
      "Violet Evergarden", "Bocchi the Rock", "Clannad", "Fruits Basket",
      "Ouran Host Club", "Nana", "Skip and Loafer", "Angel Beats",
      "Natsume's Book of Friends", "Anohana", "A Silent Voice",
      "Weathering With You", "Horimiya", "Rent-a-Girlfriend",
      "March Comes in Like a Lion",
    ]
  },

  // ── Heroes, mechs, and future tech ────────────────────────────────────────
  { icon: "🦹",  name: "Superhero / Sci-Fi",
    series: [
      "My Hero Academia", "Dr. Stone", "Seraph of the End",
      "Darling in the FranXX", "Ghost in the Shell",
      "The Melancholy of Haruhi Suzumiya", "Trigun",
      "Outlaw Star", "Space Dandy", "Promare",
    ]
  },

  // ── Where the light doesn't reach ─────────────────────────────────────────
  { icon: "☠️",  name: "Dark / Horror",
    series: [
      "Tokyo Ghoul", "Black Butler", "Made in Abyss", "Goblin Slayer",
      "Dororo", "Hellsing", "Claymore", "Elfen Lied", "Higurashi",
      "Shiki", "Corpse Party", "Another", "Blood+", "Deadman Wonderland",
    ]
  },

  // ── Quests, dungeons, and wide worlds ─────────────────────────────────────
  { icon: "🗺️",  name: "Adventure / Fantasy",
    series: [
      "Demon Slayer", "Jujutsu Kaisen", "Food Wars", "Golden Kamuy",
      "Magi", "Fairy Tail", "Black Clover", "The Seven Deadly Sins",
      "Nanatsu no Taizai", "Radiant", "Dungeon Meshi", "Delicious in Dungeon",
    ]
  },

  // ── Sweat, tears, and comebacks ────────────────────────────────────────────
  { icon: "🏆",  name: "Sports",
    series: [
      "Haikyuu", "Blue Lock", "Slam Dunk", "Hajime no Ippo",
      "Captain Tsubasa", "Initial D", "Ping Pong the Animation",
      "Kuroko's Basketball", "Yuri on Ice", "Free!",
      "Umamusume: Pretty Derby", "Umamusume: Cinderella Grey",
      "Ao Ashi", "Eyeshield 21",
    ]
  },

  // ── Laughs, idols, and everyday weirdness ─────────────────────────────────
  { icon: "🎭",  name: "Drama / Comedy / Other",
    series: [
      "Tokyo Revengers", "Oshi no Ko", "Sailor Moon", "Cardcaptor Sakura",
      "Paradise Kiss", "Nichijou", "Azumanga Daioh", "K-On!",
      "Lucky Star", "Yuru Camp", "Laid-Back Camp", "Odd Taxi",
    ]
  },

  // ── Missions, secrets, and covert ops ─────────────────────────────────────
  { icon: "🕵️",  name: "Spy / Thriller",
    series: [
      "Spy x Family", "Assassination Classroom", "Psycho-Pass",
      "91 Days", "Banana Fish",
    ]
  },
];

// ── GAME OPTIONS (persisted via localStorage-like object in memory) ────────
var gameOptions = {
  showSeriesInAC:    true,
  searchBySeries:    false,
  searchBoth:        false,
  hideSeriesCol:     false,
  hardMode:          false,
};

(function() {
  try {
    var saved = sessionStorage.getItem('anidle_options');
    if (saved) { Object.assign(gameOptions, JSON.parse(saved)); }
  } catch(e) {}
})();

function saveOptions() {
  try { sessionStorage.setItem('anidle_options', JSON.stringify(gameOptions)); } catch(e) {}
}

function maxAttempts() {
  return gameOptions.hardMode ? MAX_ATTEMPTS_HARD : MAX_ATTEMPTS_NORMAL;
}

// ── GAME STATE ─────────────────────────────────────────────────────────────
var target         = null;
var attempts       = 0;
var gameOver       = false;
var selectedSeries = new Set();
var pool           = [];

// ── DOM ────────────────────────────────────────────────────────────────────
var setupScreen  = document.getElementById('setup-screen');
var gameScreen   = document.getElementById('game-screen');
var genreListEl  = document.getElementById('genre-list');
var poolCount    = document.getElementById('pool-count');
var startBtn     = document.getElementById('start-btn');
var selectAllBtn = document.getElementById('select-all-btn');
var clearAllBtn  = document.getElementById('clear-all-btn');

var guessInput   = document.getElementById('guess-input');
var guessBtn     = document.getElementById('guess-btn');
var acList       = document.getElementById('autocomplete-list');
var guessTbody   = document.getElementById('guess-tbody');
var attemptsEl   = document.getElementById('attempts-used');
var guessMsg     = document.getElementById('guess-msg');
var backBtn      = document.getElementById('back-btn');
var gameSeriesList = document.getElementById('game-series-list');

var resultOverlay   = document.getElementById('result-overlay');
var resultEmoji     = document.getElementById('result-emoji');
var resultTitle     = document.getElementById('result-title');
var resultSub       = document.getElementById('result-sub');
var resultChar      = document.getElementById('result-char');
var playAgainBtn    = document.getElementById('play-again-btn');
var changeSeriesBtn = document.getElementById('change-series-btn');

var optionsOverlay = document.getElementById('options-overlay');
var optionsBtn     = document.getElementById('options-btn');
var optionsClose   = document.getElementById('options-close');
var optionsSave    = document.getElementById('options-save');

var themeToggleBtn = document.getElementById('theme-toggle');
var themeIcon      = themeToggleBtn.querySelector('.theme-icon');

// ── THEME ──────────────────────────────────────────────────────────────────

var currentTheme = 'dark';
try {
  var saved = localStorage.getItem('anidle_theme');
  if (saved === 'light' || saved === 'dark') currentTheme = saved;
} catch(e) {}

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  try { localStorage.setItem('anidle_theme', theme); } catch(e) {}
}
applyTheme(currentTheme);

themeToggleBtn.addEventListener('click', function() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// ── OPTIONS MODAL ──────────────────────────────────────────────────────────

function openOptions() {
  document.getElementById('opt-show-series').checked     = gameOptions.showSeriesInAC;
  document.getElementById('opt-search-by-series').checked = gameOptions.searchBySeries;
  document.getElementById('opt-search-both').checked     = gameOptions.searchBoth;
  document.getElementById('opt-hide-series-col').checked = gameOptions.hideSeriesCol;
  document.getElementById('opt-hard-mode').checked       = gameOptions.hardMode;
  optionsOverlay.classList.remove('hidden');
}

function closeOptions() {
  optionsOverlay.classList.add('hidden');
}

optionsBtn.addEventListener('click', openOptions);
optionsClose.addEventListener('click', closeOptions);
optionsOverlay.addEventListener('click', function(e) {
  if (!e.target.closest('.options-card')) closeOptions();
});

optionsSave.addEventListener('click', function() {
  gameOptions.showSeriesInAC  = document.getElementById('opt-show-series').checked;
  gameOptions.searchBySeries  = document.getElementById('opt-search-by-series').checked;
  gameOptions.searchBoth      = document.getElementById('opt-search-both').checked;
  gameOptions.hideSeriesCol   = document.getElementById('opt-hide-series-col').checked;
  gameOptions.hardMode        = document.getElementById('opt-hard-mode').checked;
  saveOptions();
  applySeriesColVisibility();
  closeOptions();
});

function applySeriesColVisibility() {
  var gameMain = document.querySelector('.game-main');
  if (gameMain) {
    gameMain.classList.toggle('hide-series-col', gameOptions.hideSeriesCol);
  }
}

// ── BUILD GENRE ACCORDION ──────────────────────────────────────────────────

function buildGenreList() {
  genreListEl.innerHTML = '';
  GENRES.forEach(function(genre) {
    var available = genre.series.filter(function(s) {
      return ANIME_DB.some(function(c) { return c.series === s; });
    });
    if (!available.length) return;

    var block = document.createElement('div');
    block.className = 'genre-block';

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

// ── GAME START ─────────────────────────────────────────────────────────────

function startGame() {
  pool     = ANIME_DB.filter(function(c) { return selectedSeries.has(c.series); });
  target   = pool[Math.floor(Math.random() * pool.length)];
  attempts = 0;
  gameOver = false;

  guessTbody.innerHTML   = '';
  guessInput.value       = '';
  guessMsg.textContent   = '';
  attemptsEl.textContent = '0';

  var badge = document.querySelector('.attempts-badge');
  if (badge) badge.innerHTML = 'Attempts: <span id="attempts-used">0</span> / ' + maxAttempts();
  attemptsEl = document.getElementById('attempts-used');

  resultOverlay.classList.add('hidden');

  gameSeriesList.innerHTML = '';
  Array.from(selectedSeries).sort().forEach(function(s) {
    var li = document.createElement('li');
    li.textContent = s;
    gameSeriesList.appendChild(li);
  });

  applySeriesColVisibility();
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

// ── AUTOCOMPLETE ───────────────────────────────────────────────────────────
var acIndex = -1;

function getACMatches(q) {
  var guessed = getGuessedNames();
  return pool.filter(function(c) {
    if (guessed.includes(c.name.toLowerCase())) return false;

    var nameLower   = c.name.toLowerCase();
    var seriesLower = c.series.toLowerCase();

    if (gameOptions.searchBoth) {
      return nameLower.includes(q) || seriesLower.includes(q);
    } else if (gameOptions.searchBySeries) {
      return seriesLower.includes(q);
    } else {
      return nameLower.includes(q);
    }
  }).slice(0, 10);
}

guessInput.addEventListener('input', function() {
  var q = guessInput.value.trim().toLowerCase();
  if (!q) { hideAC(); return; }

  var matches = getACMatches(q);
  if (!matches.length) { hideAC(); return; }

  acList.innerHTML = '';
  acIndex = -1;

  matches.forEach(function(c) {
    var li = document.createElement('li');
    li.dataset.name = c.name;

    if (gameOptions.showSeriesInAC) {
      var nameSpan   = document.createElement('span');
      nameSpan.className = 'ac-name';
      nameSpan.textContent = c.name;

      var seriesSpan = document.createElement('span');
      seriesSpan.className = 'ac-series';
      seriesSpan.textContent = c.series;

      li.appendChild(nameSpan);
      li.appendChild(seriesSpan);
    } else {
      li.textContent = c.name;
    }

    li.addEventListener('mousedown', function(e) {
      e.preventDefault();
      selectACItem(c.name);
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
    if (items[acIndex]) {
      guessInput.value = items[acIndex].dataset.name;
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    acIndex = Math.max(acIndex - 1, -1);
    items.forEach(function(li, i) { li.classList.toggle('active', i === acIndex); });
    if (acIndex >= 0 && items[acIndex]) {
      guessInput.value = items[acIndex].dataset.name;
    }
  } else if (e.key === 'Enter') {
    if (acIndex >= 0 && items[acIndex]) {
      e.preventDefault();
      selectACItem(items[acIndex].dataset.name);
    } else {
      hideAC();
      submitGuess();
    }
  } else if (e.key === 'Escape') {
    hideAC();
  } else if (e.key === 'Tab' && !acList.classList.contains('hidden')) {
    e.preventDefault();
    if (items[0]) selectACItem(items[0].dataset.name);
  }
});

guessBtn.addEventListener('click', submitGuess);

document.addEventListener('click', function(e) {
  if (!e.target.closest('.autocomplete-wrap')) hideAC();
});

guessInput.addEventListener('focus', function() {
  var q = guessInput.value.trim().toLowerCase();
  if (q) guessInput.dispatchEvent(new Event('input'));
});

function selectACItem(name) {
  guessInput.value = name;
  hideAC();
  guessInput.focus();
}

function hideAC() { acList.classList.add('hidden'); acIndex = -1; }

function getGuessedNames() {
  return Array.from(guessTbody.querySelectorAll('[data-guessname]')).map(function(td) {
    return td.dataset.guessname.toLowerCase();
  });
}

// ── GUESS LOGIC ────────────────────────────────────────────────────────────

function submitGuess() {
  if (gameOver) return;
  var raw = guessInput.value.trim();
  if (!raw) { guessMsg.textContent = 'Type a character name first.'; return; }

  var guess = pool.find(function(c) { return c.name.toLowerCase() === raw.toLowerCase(); });
  if (!guess) {
    guessMsg.textContent = '"' + raw + '" not found in pool — pick from the autocomplete list.';
    return;
  }

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
  if (won || attempts >= maxAttempts()) {
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
    case 'name':   return guess.name.toLowerCase() === target.name.toLowerCase() ? 'cell-green' : 'cell-red';
    case 'series': return guess.series === target.series ? 'cell-green' : 'cell-red';
    case 'gender': return guess.gender === target.gender ? 'cell-green' : 'cell-red';
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

// ── RESULT ─────────────────────────────────────────────────────────────────

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

resultOverlay.addEventListener('click', function(e) {
  if (!e.target.closest('.result-card')) {
    resultOverlay.classList.add('hidden');
  }
});

// ── INIT ───────────────────────────────────────────────────────────────────
buildGenreList();

// ── CHALLENGE MODE ─────────────────────────────────────────────────────────
// A "challenge" is a URL with a hash like:
//   #challenge=<base64(JSON({n:"CharName",s:"SeriesName",pool:["S1","S2",...]}))>
//
// The sender picks one or more series, optionally picks a specific character,
// and generates a link. The receiver auto-starts the game with that exact
// character as the target (pool = all selected series).

// ── Track which series are selected in the challenge modal ─────────────────
var challengeSelectedSeries = new Set();

// ── Inject challenge modal HTML ────────────────────────────────────────────
(function injectChallengeUI() {
  // Button next to Start Game
  var startRow = document.querySelector('.start-row');
  if (startRow) {
    var btn = document.createElement('button');
    btn.id = 'challenge-btn';
    btn.className = 'ctrl-btn challenge-create-btn';
    btn.textContent = '🔗 Challenge a Friend';
    btn.title = 'Create a link where you pick the character your friend has to guess';
    startRow.appendChild(btn);
  }

  // Modal overlay — rebuilt with genre accordion + character picker
  var modal = document.createElement('div');
  modal.id = 'challenge-overlay';
  modal.className = 'options-overlay hidden';
  modal.innerHTML = [
    '<div class="options-card challenge-card">',

      '<div class="options-header">',
        '<h2 class="options-title">🔗 Challenge a Friend</h2>',
        '<button id="challenge-close" class="options-close">✕</button>',
      '</div>',

      '<div class="options-body" style="gap:16px">',

        // Step 1 – series picker
        '<div class="option-group">',
          '<div class="option-group-label">Step 1 — Pick series (one or more)</div>',
          '<p class="setup-sub" style="margin-bottom:10px;font-size:.82rem">',
            'Your friend\'s pool will contain all the series you select.',
          '</p>',

          // Series controls
          '<div style="display:flex;gap:6px;margin-bottom:10px">',
            '<button id="ch-select-all" class="ctrl-btn" style="font-size:.8rem;padding:5px 14px">Select All</button>',
            '<button id="ch-clear-all"  class="ctrl-btn" style="font-size:.8rem;padding:5px 14px">Clear All</button>',
          '</div>',

          // Selected chips
          '<div id="ch-selected-summary" class="ch-selected-summary"></div>',
          '<p id="ch-series-count" class="setup-sub" style="font-size:.8rem;margin-bottom:8px">0 series selected</p>',

          // Genre accordion (populated by JS)
          '<div id="ch-genre-list" class="ch-genre-list"></div>',
        '</div>',

        // Step 2 – character picker (shown after a series is selected)
        '<div id="ch-char-section" class="option-group ch-char-section">',
          '<div class="option-group-label">Step 2 — Pick a character (optional)</div>',
          '<select id="ch-char-select" class="ch-select">',
            '<option value="">🎲 Random character from selected series</option>',
          '</select>',
        '</div>',

        // Step 3 – generated link
        '<div id="ch-link-group" class="option-group" style="display:none">',
          '<div class="option-group-label">Step 3 — Your challenge link</div>',
          '<div class="ch-link-row">',
            '<input type="text" id="ch-link-input" class="ch-link-input" readonly />',
            '<button id="ch-copy-btn" class="ctrl-btn">📋 Copy</button>',
          '</div>',
          '<p id="ch-copy-msg" class="guess-msg" style="margin-top:6px"></p>',
        '</div>',

      '</div>',

      '<div class="options-footer">',
        '<button id="ch-generate-btn" class="start-btn" disabled>Generate Link</button>',
      '</div>',

    '</div>',
  ].join('');
  document.getElementById('app').appendChild(modal);

  // Challenge received banner
  var banner = document.createElement('div');
  banner.id = 'challenge-banner';
  banner.className = 'challenge-banner hidden';
  banner.innerHTML = [
    '<span id="challenge-banner-text">🎯 Challenge mode: guess the mystery character!</span>',
    '<button id="challenge-banner-close" class="options-close" style="margin-left:auto">✕</button>',
  ].join('');
  var header = document.querySelector('header');
  if (header) header.insertAdjacentElement('afterend', banner);
})();

// ── Wire up challenge modal refs ───────────────────────────────────────────
var challengeBtn     = document.getElementById('challenge-btn');
var challengeOverlay = document.getElementById('challenge-overlay');
var challengeClose   = document.getElementById('challenge-close');
var chGenreListEl    = document.getElementById('ch-genre-list');
var chSelectedSummary= document.getElementById('ch-selected-summary');
var chSeriesCount    = document.getElementById('ch-series-count');
var chCharSection    = document.getElementById('ch-char-section');
var chCharSelect     = document.getElementById('ch-char-select');
var chLinkGroup      = document.getElementById('ch-link-group');
var chLinkInput      = document.getElementById('ch-link-input');
var chCopyBtn        = document.getElementById('ch-copy-btn');
var chCopyMsg        = document.getElementById('ch-copy-msg');
var chGenerateBtn    = document.getElementById('ch-generate-btn');
var chSelectAll      = document.getElementById('ch-select-all');
var chClearAll       = document.getElementById('ch-clear-all');

// ── Build the challenge genre accordion ────────────────────────────────────

function buildChallengeGenreList() {
  chGenreListEl.innerHTML = '';
  GENRES.forEach(function(genre) {
    var available = genre.series.filter(function(s) {
      return ANIME_DB.some(function(c) { return c.series === s; });
    });
    if (!available.length) return;

    var block = document.createElement('div');
    block.className = 'ch-genre-block';

    var header = document.createElement('button');
    header.className = 'ch-genre-header';
    header.innerHTML =
      '<span class="ch-genre-label">' +
        '<span class="ch-genre-icon">' + genre.icon + '</span>' +
        genre.name +
        '<span class="ch-genre-badge">' + available.length + ' series</span>' +
      '</span>' +
      '<span class="ch-genre-arrow">▼</span>';

    var body = document.createElement('div');
    body.className = 'ch-genre-body';

    available.forEach(function(s) {
      var tag = document.createElement('button');
      tag.className = 'ch-series-tag' + (challengeSelectedSeries.has(s) ? ' selected' : '');
      tag.textContent = s;
      tag.dataset.series = s;
      tag.addEventListener('click', function() { toggleChallengeSeriesTag(s, tag); });
      body.appendChild(tag);
    });

    header.addEventListener('click', function() {
      var isOpen = body.classList.contains('open');
      body.classList.toggle('open', !isOpen);
      header.classList.toggle('open', !isOpen);
    });

    block.appendChild(header);
    block.appendChild(body);
    chGenreListEl.appendChild(block);
  });
}

function toggleChallengeSeriesTag(series, el) {
  if (challengeSelectedSeries.has(series)) {
    challengeSelectedSeries.delete(series);
    el.classList.remove('selected');
  } else {
    challengeSelectedSeries.add(series);
    el.classList.add('selected');
  }
  updateChallengeUI();
}

function updateChallengeUI() {
  // Count label
  var count = challengeSelectedSeries.size;
  var totalChars = ANIME_DB.filter(function(c) { return challengeSelectedSeries.has(c.series); }).length;
  chSeriesCount.textContent = count > 0
    ? count + ' series selected (' + totalChars + ' characters)'
    : '0 series selected';

  // Chips row
  chSelectedSummary.innerHTML = '';
  Array.from(challengeSelectedSeries).sort().forEach(function(s) {
    var chip = document.createElement('div');
    chip.className = 'ch-selected-chip';
    chip.innerHTML = '<span>' + s + '</span>' +
      '<button class="ch-chip-remove" title="Remove" data-series="' + s.replace(/"/g,'&quot;') + '">×</button>';
    chip.querySelector('.ch-chip-remove').addEventListener('click', function() {
      challengeSelectedSeries.delete(s);
      // un-highlight tag in accordion
      var tag = chGenreListEl.querySelector('.ch-series-tag[data-series="' + s.replace(/"/g,'&quot;') + '"]');
      if (tag) tag.classList.remove('selected');
      updateChallengeUI();
    });
    chSelectedSummary.appendChild(chip);
  });

  // Show/hide character picker
  if (count > 0) {
    chCharSection.classList.add('visible');
    populateChallengeCharSelect();
  } else {
    chCharSection.classList.remove('visible');
  }

  // Reset link
  chLinkGroup.style.display = 'none';
  chCopyMsg.textContent = '';

  // Enable generate button only if series selected
  chGenerateBtn.disabled = count === 0;
}

function populateChallengeCharSelect() {
  var chars = ANIME_DB.filter(function(c) { return challengeSelectedSeries.has(c.series); });
  // Sort by series then name
  chars.sort(function(a, b) {
    if (a.series < b.series) return -1;
    if (a.series > b.series) return 1;
    return a.name.localeCompare(b.name);
  });

  chCharSelect.innerHTML = '<option value="">🎲 Random character from selected series</option>';

  // Group by series with optgroups
  var seriesSeen = [];
  chars.forEach(function(c) {
    if (!seriesSeen.includes(c.series)) {
      seriesSeen.push(c.series);
    }
  });
  seriesSeen.forEach(function(s) {
    var group = document.createElement('optgroup');
    group.label = s;
    chars.filter(function(c) { return c.series === s; }).forEach(function(c) {
      var opt = document.createElement('option');
      opt.value = c.name;
      opt.textContent = c.name;
      group.appendChild(opt);
    });
    chCharSelect.appendChild(group);
  });
}

// ── Select all / clear all in challenge modal ──────────────────────────────
chSelectAll.addEventListener('click', function() {
  chGenreListEl.querySelectorAll('.ch-series-tag').forEach(function(tag) {
    challengeSelectedSeries.add(tag.dataset.series);
    tag.classList.add('selected');
  });
  updateChallengeUI();
});

chClearAll.addEventListener('click', function() {
  challengeSelectedSeries.clear();
  chGenreListEl.querySelectorAll('.ch-series-tag').forEach(function(tag) {
    tag.classList.remove('selected');
  });
  updateChallengeUI();
});

// ── Open / close challenge modal ───────────────────────────────────────────

function openChallengeModal() {
  // Reset state
  challengeSelectedSeries.clear();
  buildChallengeGenreList();
  updateChallengeUI();
  challengeOverlay.classList.remove('hidden');
}

function closeChallengeModal() {
  challengeOverlay.classList.add('hidden');
}

challengeBtn.addEventListener('click', openChallengeModal);
challengeClose.addEventListener('click', closeChallengeModal);
challengeOverlay.addEventListener('click', function(e) {
  if (!e.target.closest('.challenge-card')) closeChallengeModal();
});

// ── Generate link ──────────────────────────────────────────────────────────
chGenerateBtn.addEventListener('click', function() {
  if (!challengeSelectedSeries.size) return;

  var charName = chCharSelect.value;
  if (!charName) {
    // Pick a random character from the combined pool
    var chars = ANIME_DB.filter(function(c) { return challengeSelectedSeries.has(c.series); });
    if (!chars.length) return;
    var chosen = chars[Math.floor(Math.random() * chars.length)];
    charName = chosen.name;
  }

  // Find character to confirm it exists
  var charObj = ANIME_DB.find(function(c) { return c.name === charName; });
  if (!charObj) return;

  var payload = JSON.stringify({
    n:    charObj.name,
    s:    charObj.series,
    pool: Array.from(challengeSelectedSeries),
  });
  var encoded = btoa(unescape(encodeURIComponent(payload)));
  var url = window.location.href.split('#')[0] + '#challenge=' + encoded;

  chLinkInput.value = url;
  chLinkGroup.style.display = '';
  chCopyMsg.textContent = '';
});

// ── Copy link ──────────────────────────────────────────────────────────────
chCopyBtn.addEventListener('click', function() {
  chLinkInput.select();
  chLinkInput.setSelectionRange(0, 99999);
  try {
    var ok = document.execCommand('copy');
    if (ok) {
      chCopyMsg.textContent = '✅ Copied! Send this link to your friend.';
      chCopyMsg.style.color = 'var(--green)';
    } else { throw new Error(); }
  } catch(e) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(chLinkInput.value).then(function() {
        chCopyMsg.textContent = '✅ Copied! Send this link to your friend.';
        chCopyMsg.style.color = 'var(--green)';
      }).catch(function() {
        chCopyMsg.textContent = '⚠️ Auto-copy failed — please copy the link manually.';
        chCopyMsg.style.color = 'var(--yellow)';
      });
    } else {
      chCopyMsg.textContent = '⚠️ Auto-copy failed — please copy the link manually.';
      chCopyMsg.style.color = 'var(--yellow)';
    }
  }
});

// ── Challenge banner (receiver side) ──────────────────────────────────────
var challengeBanner      = document.getElementById('challenge-banner');
var challengeBannerText  = document.getElementById('challenge-banner-text');
var challengeBannerClose = document.getElementById('challenge-banner-close');

challengeBannerClose.addEventListener('click', function() {
  challengeBanner.classList.add('hidden');
});

// ── Parse challenge hash ───────────────────────────────────────────────────
function parseChallengeHash() {
  try {
    var hash = window.location.hash;
    if (!hash || hash.indexOf('challenge=') === -1) return null;
    var encoded = hash.split('challenge=')[1];
    if (!encoded) return null;
    var json = decodeURIComponent(escape(atob(encoded)));
    var data = JSON.parse(json);
    if (!data.n || !data.s) return null;
    return data; // { n, s, pool? }
  } catch(e) {
    return null;
  }
}

function startChallengeGame(data) {
  var char = ANIME_DB.find(function(c) {
    return c.name.toLowerCase() === data.n.toLowerCase() && c.series === data.s;
  });
  if (!char) return false;

  // Build the pool — use the provided pool list if present, else just the character's series
  var poolSeries = (data.pool && Array.isArray(data.pool) && data.pool.length > 0)
    ? data.pool
    : [data.s];

  // Make sure the target's series is always in the pool
  if (!poolSeries.includes(data.s)) poolSeries.push(data.s);

  selectedSeries.clear();
  poolSeries.forEach(function(s) { selectedSeries.add(s); });

  // Sync main setup UI tags
  document.querySelectorAll('.series-tag').forEach(function(tag) {
    if (selectedSeries.has(tag.dataset.series)) {
      tag.classList.add('selected');
    } else {
      tag.classList.remove('selected');
    }
  });
  updatePoolCount();

  pool     = ANIME_DB.filter(function(c) { return selectedSeries.has(c.series); });
  target   = char;
  attempts = 0;
  gameOver = false;

  guessTbody.innerHTML   = '';
  guessInput.value       = '';
  guessMsg.textContent   = '';
  attemptsEl.textContent = '0';

  var badge = document.querySelector('.attempts-badge');
  if (badge) badge.innerHTML = 'Attempts: <span id="attempts-used">0</span> / ' + maxAttempts();
  attemptsEl = document.getElementById('attempts-used');

  resultOverlay.classList.add('hidden');

  gameSeriesList.innerHTML = '';
  Array.from(selectedSeries).sort().forEach(function(s) {
    var li = document.createElement('li');
    li.textContent = s;
    gameSeriesList.appendChild(li);
  });

  applySeriesColVisibility();
  showScreen('game');

  var seriesLabel = poolSeries.length === 1
    ? poolSeries[0]
    : poolSeries.length + ' series';
  challengeBannerText.textContent =
    '🎯 Challenge from a friend — guess the mystery character! (' + seriesLabel + ' in pool)';
  challengeBanner.classList.remove('hidden');

  guessInput.focus();
  return true;
}

// ── Init: check for challenge link on page load ────────────────────────────
function tryLoadChallenge() {
  var data = parseChallengeHash();
  if (data) {
    setTimeout(function() {
      var started = startChallengeGame(data);
      if (!started) {
        console.warn('ANIDLE: challenge character not found:', data);
      }
    }, 50);
  }
}

// Handle fresh page load with a challenge hash
tryLoadChallenge();

// Handle the case where the user is ALREADY on character.html and clicks
// a challenge link — the page won't reload, so we catch the hash change here.
window.addEventListener('hashchange', function() {
  tryLoadChallenge();
});
