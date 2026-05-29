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
  showSeriesInAC:    true,   // show "(Series)" label in autocomplete suggestions
  searchBySeries:    false,  // allow typing a series name to filter characters
  searchBoth:        false,  // match name OR series (supersedes searchBySeries alone)
  hideSeriesCol:     false,  // hide the Series column in the guess table
  hardMode:          false,  // 10 attempts instead of 20
};

// Try to load saved options from sessionStorage
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
  var saved = sessionStorage.getItem('anidle_theme');
  if (saved === 'light' || saved === 'dark') currentTheme = saved;
} catch(e) {}

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  try { sessionStorage.setItem('anidle_theme', theme); } catch(e) {}
}
applyTheme(currentTheme);

themeToggleBtn.addEventListener('click', function() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// ── OPTIONS MODAL ──────────────────────────────────────────────────────────

function openOptions() {
  // Sync checkboxes to current state
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

  // Apply series column visibility immediately
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

  // Update the attempts display to reflect hard mode setting
  var badge = document.querySelector('.attempts-badge');
  if (badge) badge.innerHTML = 'Attempts: <span id="attempts-used">0</span> / ' + maxAttempts();
  attemptsEl = document.getElementById('attempts-used');

  resultOverlay.classList.add('hidden');

  // Populate side panel
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

// Returns filtered match list based on current options
function getACMatches(q) {
  var guessed = getGuessedNames();
  return pool.filter(function(c) {
    if (guessed.includes(c.name.toLowerCase())) return false;

    var nameLower   = c.name.toLowerCase();
    var seriesLower = c.series.toLowerCase();

    if (gameOptions.searchBoth) {
      // Match if name OR series contains query
      return nameLower.includes(q) || seriesLower.includes(q);
    } else if (gameOptions.searchBySeries) {
      // Only match by series name (still guesses by character name)
      return seriesLower.includes(q);
    } else {
      // Default: match by character name only
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
      // Two-line layout: bold name + subtle series below
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
      // An item is highlighted — select it without submitting guess
      e.preventDefault();
      selectACItem(items[acIndex].dataset.name);
    } else {
      hideAC();
      submitGuess();
    }
  } else if (e.key === 'Escape') {
    hideAC();
  } else if (e.key === 'Tab' && !acList.classList.contains('hidden')) {
    // Tab completes the first suggestion
    e.preventDefault();
    if (items[0]) selectACItem(items[0].dataset.name);
  }
});

// Clicking the guess button always submits
guessBtn.addEventListener('click', submitGuess);

// Hide autocomplete when clicking outside the input area
document.addEventListener('click', function(e) {
  if (!e.target.closest('.autocomplete-wrap')) hideAC();
});

// Re-show autocomplete when re-focusing input (if there's text)
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
//   #challenge=<base64(JSON({n:"CharName",s:"SeriesName"}))>
//
// When the sender creates a challenge they:
//   1. Pick a series (and optionally a specific character)
//   2. Click "Create Challenge Link"
//   3. Copy the link and send it to a friend
//
// When the receiver opens the link:
//   - The game auto-selects the series
//   - Sets the target to the chosen character
//   - Skips straight to the game screen

// ── HTML for Challenge Modal (injected at runtime) ─────────────────────────
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

  // Modal overlay
  var modal = document.createElement('div');
  modal.id = 'challenge-overlay';
  modal.className = 'options-overlay hidden';
  modal.innerHTML = [
    '<div class="options-card challenge-card">',
      '<div class="options-header">',
        '<h2 class="options-title">🔗 Challenge a Friend</h2>',
        '<button id="challenge-close" class="options-close">✕</button>',
      '</div>',
      '<div class="options-body" id="challenge-body">',
        '<p class="setup-sub" style="margin-bottom:12px">',
          'Pick a series (and optionally a specific character), then copy the link.',
          ' Your friend will be challenged to guess exactly that character!',
        '</p>',

        '<div class="option-group">',
          '<div class="option-group-label">Step 1 — Pick a Series</div>',
          '<select id="ch-series-select" class="ch-select">',
            '<option value="">— Choose a series —</option>',
          '</select>',
        '</div>',

        '<div class="option-group" id="ch-char-group" style="display:none">',
          '<div class="option-group-label">Step 2 — Pick a Character (optional)</div>',
          '<select id="ch-char-select" class="ch-select">',
            '<option value="">🎲 Random character from this series</option>',
          '</select>',
        '</div>',

        '<div class="option-group" id="ch-link-group" style="display:none">',
          '<div class="option-group-label">Step 3 — Your Challenge Link</div>',
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

  // Also inject a small banner for when a challenge is received
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

// ── Challenge modal logic ──────────────────────────────────────────────────
var challengeBtn     = document.getElementById('challenge-btn');
var challengeOverlay = document.getElementById('challenge-overlay');
var challengeClose   = document.getElementById('challenge-close');
var chSeriesSelect   = document.getElementById('ch-series-select');
var chCharGroup      = document.getElementById('ch-char-group');
var chCharSelect     = document.getElementById('ch-char-select');
var chLinkGroup      = document.getElementById('ch-link-group');
var chLinkInput      = document.getElementById('ch-link-input');
var chCopyBtn        = document.getElementById('ch-copy-btn');
var chCopyMsg        = document.getElementById('ch-copy-msg');
var chGenerateBtn    = document.getElementById('ch-generate-btn');

function openChallengeModal() {
  // Populate series dropdown from whatever's in ANIME_DB
  var allSeries = [];
  ANIME_DB.forEach(function(c) {
    if (!allSeries.includes(c.series)) allSeries.push(c.series);
  });
  allSeries.sort();

  chSeriesSelect.innerHTML = '<option value="">— Choose a series —</option>';
  allSeries.forEach(function(s) {
    var opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s;
    chSeriesSelect.appendChild(opt);
  });

  // Reset state
  chCharGroup.style.display = 'none';
  chLinkGroup.style.display = 'none';
  chCopyMsg.textContent = '';
  chGenerateBtn.disabled = true;
  chCharSelect.innerHTML = '<option value="">🎲 Random character from this series</option>';

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

chSeriesSelect.addEventListener('change', function() {
  var series = chSeriesSelect.value;
  chLinkGroup.style.display = 'none';
  chCopyMsg.textContent = '';

  if (!series) {
    chCharGroup.style.display = 'none';
    chGenerateBtn.disabled = true;
    return;
  }

  // Populate characters for selected series
  var chars = ANIME_DB.filter(function(c) { return c.series === series; });
  chCharSelect.innerHTML = '<option value="">🎲 Random character from this series</option>';
  chars.forEach(function(c) {
    var opt = document.createElement('option');
    opt.value = c.name;
    opt.textContent = c.name;
    chCharSelect.appendChild(opt);
  });

  chCharGroup.style.display = '';
  chGenerateBtn.disabled = false;
});

chGenerateBtn.addEventListener('click', function() {
  var series = chSeriesSelect.value;
  if (!series) return;

  var charName = chCharSelect.value;
  if (!charName) {
    // Pick a random character from the series
    var chars = ANIME_DB.filter(function(c) { return c.series === series; });
    if (!chars.length) return;
    charName = chars[Math.floor(Math.random() * chars.length)].name;
  }

  var payload = JSON.stringify({ n: charName, s: series });
  var encoded = btoa(unescape(encodeURIComponent(payload)));
  var url = 'https://brinnykins7-hue.github.io/anidle/#challenge=' + encoded;

  chLinkInput.value = url;
  chLinkGroup.style.display = '';
  chCopyMsg.textContent = '';
});

chCopyBtn.addEventListener('click', function() {
  chLinkInput.select();
  chLinkInput.setSelectionRange(0, 99999); // mobile support
  try {
    var ok = document.execCommand('copy');
    if (ok) {
      chCopyMsg.textContent = '✅ Copied! Send this link to your friend.';
      chCopyMsg.style.color = 'var(--green)';
    } else {
      throw new Error('execCommand failed');
    }
  } catch(e) {
    // Try modern clipboard API
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

// ── Read challenge from URL hash & auto-start ──────────────────────────────
function parseChallengeHash() {
  try {
    var hash = window.location.hash; // e.g. "#challenge=eyJuIjoiTmFydXRvIFV6dW1ha2kifQ=="
    if (!hash || hash.indexOf('challenge=') === -1) return null;
    var encoded = hash.split('challenge=')[1];
    if (!encoded) return null;
    var json = decodeURIComponent(escape(atob(encoded)));
    var data = JSON.parse(json);
    if (!data.n || !data.s) return null;
    return data; // { n: charName, s: seriesName }
  } catch(e) {
    return null;
  }
}

function startChallengeGame(data) {
  var char = ANIME_DB.find(function(c) {
    return c.name.toLowerCase() === data.n.toLowerCase() && c.series === data.s;
  });

  if (!char) {
    // Character not found — fall back to normal mode silently
    return false;
  }

  // Select the series so the pool is correct
  selectedSeries.clear();
  selectedSeries.add(data.s);

  // Mark it in the UI too (series tag, if visible)
  document.querySelectorAll('.series-tag').forEach(function(tag) {
    if (tag.dataset.series === data.s) {
      tag.classList.add('selected');
    } else {
      tag.classList.remove('selected');
    }
  });
  updatePoolCount();

  // Set up pool and override target
  pool     = ANIME_DB.filter(function(c) { return c.series === data.s; });
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
  var li = document.createElement('li');
  li.textContent = data.s;
  gameSeriesList.appendChild(li);

  applySeriesColVisibility();
  showScreen('game');

  // Show banner
  challengeBannerText.textContent = '🎯 Challenge from a friend — guess the mystery ' + data.s + ' character! (1 series in pool)';
  challengeBanner.classList.remove('hidden');

  guessInput.focus();
  return true;
}

// ── Init: check for challenge link on page load ────────────────────────────
(function checkForChallenge() {
  // Wait until buildGenreList has run (it's called synchronously above),
  // then try to start challenge mode.
  var data = parseChallengeHash();
  if (data) {
    // Small delay so all DOM is settled
    setTimeout(function() {
      var started = startChallengeGame(data);
      if (!started) {
        console.warn('ANIDLE: challenge character not found:', data);
      }
    }, 50);
  }
})();
