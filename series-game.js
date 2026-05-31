// ── ANIDLE SERIES MODE – GAME LOGIC ──────────────────────────────────────

const MAX_ATTEMPTS_NORMAL = 20;
const MAX_ATTEMPTS_HARD   = 10;

var seriesGameOptions = {
  hardMode:       false,
  hideStudioCol:  false,
};

(function() {
  try {
    var saved = sessionStorage.getItem('anidle_series_options');
    if (saved) Object.assign(seriesGameOptions, JSON.parse(saved));
  } catch(e) {}
})();

function saveSeriesOptions() {
  try { sessionStorage.setItem('anidle_series_options', JSON.stringify(seriesGameOptions)); } catch(e) {}
}

function maxAttempts() {
  return seriesGameOptions.hardMode ? MAX_ATTEMPTS_HARD : MAX_ATTEMPTS_NORMAL;
}

// ── GAME STATE ─────────────────────────────────────────────────────────────
var target         = null;
var attempts       = 0;
var gameOver       = false;
var selectedSeries = new Set(); // selected series names in pool
var pool           = [];        // SERIES_DB entries in pool

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

// ── OPTIONS ────────────────────────────────────────────────────────────────
function openOptions() {
  document.getElementById('opt-hard-mode').checked       = seriesGameOptions.hardMode;
  document.getElementById('opt-hide-studio-col').checked = seriesGameOptions.hideStudioCol;
  optionsOverlay.classList.remove('hidden');
}
function closeOptions() { optionsOverlay.classList.add('hidden'); }

optionsBtn.addEventListener('click', openOptions);
optionsClose.addEventListener('click', closeOptions);
optionsOverlay.addEventListener('click', function(e) {
  if (!e.target.closest('.options-card')) closeOptions();
});
optionsSave.addEventListener('click', function() {
  seriesGameOptions.hardMode      = document.getElementById('opt-hard-mode').checked;
  seriesGameOptions.hideStudioCol = document.getElementById('opt-hide-studio-col').checked;
  saveSeriesOptions();
  applyStudioColVisibility();
  closeOptions();
});

function applyStudioColVisibility() {
  var gm = document.querySelector('.game-main');
  if (gm) gm.classList.toggle('hide-studio-col', seriesGameOptions.hideStudioCol);
}

// ── BUILD GENRE ACCORDION ──────────────────────────────────────────────────
function buildGenreList() {
  genreListEl.innerHTML = '';
  SERIES_GENRES.forEach(function(genre) {
    var available = genre.series.filter(function(s) {
      return SERIES_DB.some(function(d) { return d.name === s; });
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
      var entry = SERIES_DB.find(function(d) { return d.name === s; });
      var tag = document.createElement('button');
      tag.className = 'series-tag';
      tag.textContent = s + (entry ? ' (' + entry.year + ')' : '');
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
  poolCount.textContent = selectedSeries.size + ' series selected';
  startBtn.disabled = selectedSeries.size < 2;
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
  pool     = SERIES_DB.filter(function(d) { return selectedSeries.has(d.name); });
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

  // Mark the series table class for wider layout
  var gt = document.getElementById('guess-table');
  if (gt) gt.classList.add('series-table');

  applyStudioColVisibility();
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
  return pool.filter(function(d) {
    return !guessed.includes(d.name.toLowerCase()) && d.name.toLowerCase().includes(q);
  }).slice(0, 10);
}

guessInput.addEventListener('input', function() {
  var q = guessInput.value.trim().toLowerCase();
  if (!q) { hideAC(); return; }
  var matches = getACMatches(q);
  if (!matches.length) { hideAC(); return; }

  acList.innerHTML = '';
  acIndex = -1;

  matches.forEach(function(d) {
    var li = document.createElement('li');
    li.dataset.name = d.name;

    var nameSpan = document.createElement('span');
    nameSpan.className = 'ac-name';
    nameSpan.textContent = d.name;

    var metaSpan = document.createElement('span');
    metaSpan.className = 'ac-series';
    metaSpan.textContent = d.studio + ' · ' + d.year;

    li.appendChild(nameSpan);
    li.appendChild(metaSpan);

    li.addEventListener('mousedown', function(e) {
      e.preventDefault();
      selectACItem(d.name);
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
  } else if (e.key === 'Enter') {
    if (acIndex >= 0 && items[acIndex]) { e.preventDefault(); selectACItem(items[acIndex].dataset.name); }
    else { hideAC(); submitGuess(); }
  } else if (e.key === 'Escape') { hideAC(); }
  else if (e.key === 'Tab' && !acList.classList.contains('hidden')) {
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

function selectACItem(name) { guessInput.value = name; hideAC(); guessInput.focus(); }
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
  if (!raw) { guessMsg.textContent = 'Type a series name first.'; return; }

  var guess = pool.find(function(d) { return d.name.toLowerCase() === raw.toLowerCase(); });
  if (!guess) { guessMsg.textContent = '"' + raw + '" not found — pick from the autocomplete list.'; return; }

  if (getGuessedNames().includes(guess.name.toLowerCase())) {
    guessMsg.textContent = 'Already guessed that series!'; return;
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

  // # column
  var numTd = document.createElement('td');
  numTd.textContent = attempts;
  tr.appendChild(numTd);

  // Series name
  var nameTd = makeCell(guess.name, colorForName(guess));
  nameTd.dataset.guessname = guess.name;
  tr.appendChild(nameTd);

  // Studio
  tr.appendChild(makeCell(guess.studio, colorForExact('studio', guess)));

  // Year  (±3 = yellow)
  tr.appendChild(makeCell(
    guess.year + arrowFor(guess.year, target.year),
    colorForNum('year', guess, 3)
  ));

  // Episodes  (±30% = yellow; films always compared as-is)
  var epColor;
  if (guess.episodes === target.episodes) epColor = 'cell-green';
  else if (Math.abs(guess.episodes - target.episodes) / Math.max(target.episodes, 1) <= 0.30) epColor = 'cell-yellow';
  else epColor = 'cell-red';
  tr.appendChild(makeCell(
    guess.episodes === 1 ? 'Film' : guess.episodes + arrowFor(guess.episodes, target.episodes),
    epColor
  ));

  // Genre  (exact = green; genreList overlap = yellow)
  tr.appendChild(makeCell(guess.genre, colorForGenre(guess)));

  // Source
  tr.appendChild(makeCell(guess.source, colorForExact('source', guess)));

  // Score  (±0.5 = yellow)
  var scoreColor;
  if (guess.score === target.score) scoreColor = 'cell-green';
  else if (Math.abs(guess.score - target.score) <= 0.5) scoreColor = 'cell-yellow';
  else scoreColor = 'cell-red';
  tr.appendChild(makeCell(
    guess.score.toFixed(1) + arrowFor(guess.score, target.score),
    scoreColor
  ));

  // Status
  tr.appendChild(makeCell(guess.status, colorForExact('status', guess)));

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

function colorForName(guess) {
  return guess.name.toLowerCase() === target.name.toLowerCase() ? 'cell-green' : 'cell-red';
}

function colorForExact(field, guess) {
  return guess[field] === target[field] ? 'cell-green' : 'cell-red';
}

function colorForNum(field, guess, tolerance) {
  var gv = guess[field], tv = target[field];
  if (gv === tv) return 'cell-green';
  if (Math.abs(gv - tv) <= tolerance) return 'cell-yellow';
  return 'cell-red';
}

function colorForGenre(guess) {
  if (guess.genre === target.genre) return 'cell-green';
  // Yellow if any overlap in genreList arrays
  var gl = guess.genreList || [];
  var tl = target.genreList || [];
  if (gl.some(function(g) { return tl.includes(g); })) return 'cell-yellow';
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
    : 'The anime was…';

  resultChar.innerHTML =
    '<strong>' + target.name + '</strong>' +
    'Studio: ' + target.studio + '<br>' +
    'Year: ' + target.year + ' &nbsp;|&nbsp; Episodes: ' + (target.episodes === 1 ? 'Film' : target.episodes) + '<br>' +
    'Genre: ' + target.genre + ' &nbsp;|&nbsp; Source: ' + target.source + '<br>' +
    'Score: ' + target.score.toFixed(1) + ' &nbsp;|&nbsp; Status: ' + target.status;

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
  if (!e.target.closest('.result-card')) resultOverlay.classList.add('hidden');
});

// ── CSS for hide-studio-col ────────────────────────────────────────────────
(function() {
  var s = document.createElement('style');
  s.textContent =
    '.hide-studio-col #guess-table th:nth-child(3),' +
    '.hide-studio-col #guess-table td:nth-child(3) { display: none; }';
  document.head.appendChild(s);
})();

// ── INIT ───────────────────────────────────────────────────────────────────
buildGenreList();
applyStudioColVisibility();
