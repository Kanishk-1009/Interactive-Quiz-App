/* ==========================================
   QuizVortex — Modular Enhanced JavaScript
   ========================================== */

'use strict';

/* ══════════════════════════════════════════
   QUIZ DATA
══════════════════════════════════════════ */
const CATEGORIES_DATA = {
  music: {
    icon: '🎵', label: 'Music', desc: 'Genres, artists, and instruments.',
    questions: [
      { q: "Who is known as the King of Pop?", opts: ["Elvis Presley","Michael Jackson","Prince","Justin Bieber"], a: "Michael Jackson" },
      { q: "Which instrument has keys and pedals?", opts: ["Guitar","Piano","Drums","Flute"], a: "Piano" },
      { q: "How many notes in a musical octave?", opts: ["6","7","8","12"], a: "7" },
      { q: "Which clef is commonly used for guitar?", opts: ["Bass","Tenor","Treble","Alto"], a: "Treble" },
      { q: "Which singer released the album 'Thriller'?", opts: ["Prince","Michael Jackson","Madonna","Elton John"], a: "Michael Jackson" },
      { q: "Which music streaming platform was founded in 2006?", opts: ["Spotify","Apple Music","Tidal","Deezer"], a: "Spotify" },
      { q: "How many strings does a standard guitar have?", opts: ["4","5","6","7"], a: "6" }
    ]
  },
  cartoons: {
    icon: '🎬', label: 'Cartoons & Animations', desc: 'Animated shows and films.',
    questions: [
      { q: "Which studio created Tom & Jerry?", opts: ["Disney","Warner Bros","Universal","Pixar"], a: "Warner Bros" },
      { q: "Who lives in a pineapple under the sea?", opts: ["Mickey","SpongeBob","Scooby","Donald"], a: "SpongeBob" },
      { q: "Which cartoon character says 'What's up Doc?'", opts: ["Mickey","Tom","Bugs Bunny","Popeye"], a: "Bugs Bunny" },
      { q: "Pokemon was created in which country?", opts: ["USA","Japan","China","Korea"], a: "Japan" },
      { q: "Which cartoon features Dexter's Lab?", opts: ["Powerpuff Girls","Dexter's Lab","Ben 10","Dragon Ball"], a: "Dexter's Lab" },
      { q: "In The Simpsons, what is Homer's job?", opts: ["Teacher","Police Officer","Nuclear Safety Inspector","Chef"], a: "Nuclear Safety Inspector" }
    ]
  },
  vehicles: {
    icon: '🚗', label: 'Vehicles', desc: 'Cars, bikes, aircraft, ships, and more.',
    questions: [
      { q: "Which company makes the Mustang?", opts: ["BMW","Audi","Ford","Toyota"], a: "Ford" },
      { q: "What powers an electric car?", opts: ["Petrol","Diesel","Battery","Gas"], a: "Battery" },
      { q: "Which vehicle has two wheels?", opts: ["Car","Truck","Bike","Bus"], a: "Bike" },
      { q: "Which brand has a logo with four rings?", opts: ["Audi","BMW","Mercedes","Volkswagen"], a: "Audi" },
      { q: "Which vehicle travels in water?", opts: ["Train","Plane","Ship","Car"], a: "Ship" },
      { q: "What is the fastest production car class?", opts: ["Sedan","Supercar","SUV","Hatchback"], a: "Supercar" }
    ]
  },
  sports: {
    icon: '🏐', label: 'Sports', desc: 'Global sports trivia.',
    questions: [
      { q: "How many players in a football (soccer) team?", opts: ["9","10","11","12"], a: "11" },
      { q: "Which sport uses a bat and ball (cricket)?", opts: ["Football","Cricket","Hockey","Tennis"], a: "Cricket" },
      { q: "Olympics are held every how many years?", opts: ["2","3","4","5"], a: "4" },
      { q: "Which sport has the Wimbledon championship?", opts: ["Cricket","Tennis","Badminton","Football"], a: "Tennis" },
      { q: "How many rings are in the Olympic logo?", opts: ["4","5","6","7"], a: "5" },
      { q: "Which country has won the most FIFA World Cups?", opts: ["Germany","Italy","Argentina","Brazil"], a: "Brazil" }
    ]
  },
  anime: {
    icon: '⛩️', label: 'Japanese Anime & Manga', desc: 'Popular Japanese animation.',
    questions: [
      { q: "Who created Naruto?", opts: ["Oda","Toriyama","Kishimoto","Togashi"], a: "Kishimoto" },
      { q: "Naruto belongs to which village?", opts: ["Sand","Leaf","Mist","Stone"], a: "Leaf" },
      { q: "Who is Luffy's brother in One Piece?", opts: ["Ace","Zoro","Sanji","Law"], a: "Ace" },
      { q: "Who is the Dragon Ball protagonist?", opts: ["Vegeta","Gohan","Goku","Trunks"], a: "Goku" },
      { q: "Anime originated in which country?", opts: ["China","Korea","Japan","USA"], a: "Japan" },
      { q: "In Attack on Titan, what are the giant enemies called?", opts: ["Giants","Titans","Colossi","Demons"], a: "Titans" }
    ]
  },
  comics: {
    icon: '📚', label: 'Comics', desc: 'Superheroes and graphic novels.',
    questions: [
      { q: "Who co-created Spider-Man?", opts: ["Stan Lee","Bob Kane","Alan Moore","Jack Kirby"], a: "Stan Lee" },
      { q: "Batman belongs to which city?", opts: ["Metropolis","Gotham","Central City","Star City"], a: "Gotham" },
      { q: "Superman's main weakness?", opts: ["Fire","Kryptonite","Water","Magic"], a: "Kryptonite" },
      { q: "Marvel Comics is owned by?", opts: ["DC","Sony","Disney","Warner Bros"], a: "Disney" },
      { q: "Iron Man's real name?", opts: ["Steve Rogers","Tony Stark","Bruce Wayne","Peter Parker"], a: "Tony Stark" },
      { q: "The X-Men were created by?", opts: ["Jack Kirby & Stan Lee","Bob Kane","Frank Miller","Alan Moore"], a: "Jack Kirby & Stan Lee" }
    ]
  },
  books: {
    icon: '📖', label: 'Books', desc: 'Literature, authors, and novels.',
    questions: [
      { q: "Who wrote '1984'?", opts: ["George Orwell","Shakespeare","Hemingway","Tolstoy"], a: "George Orwell" },
      { q: "Who wrote Harry Potter?", opts: ["Tolkien","Rowling","Lewis","Martin"], a: "Rowling" },
      { q: "The Hobbit was written by?", opts: ["Tolkien","Rowling","Lewis","Dickens"], a: "Tolkien" },
      { q: "Who wrote 'To Kill a Mockingbird'?", opts: ["Harper Lee","Faulkner","Steinbeck","Twain"], a: "Harper Lee" },
      { q: "What genre is 'Dune'?", opts: ["Fantasy","Historical Fiction","Science Fiction","Horror"], a: "Science Fiction" }
    ]
  },
  films: {
    icon: '🎞️', label: 'Films', desc: 'Movies, directors, and actors.',
    questions: [
      { q: "Who directed Titanic (1997)?", opts: ["Nolan","Spielberg","Cameron","Fincher"], a: "Cameron" },
      { q: "Which film won Best Picture at the 2020 Oscars?", opts: ["1917","Parasite","Joker","Ford v Ferrari"], a: "Parasite" },
      { q: "Hollywood is in which city?", opts: ["New York","Los Angeles","Chicago","Miami"], a: "Los Angeles" },
      { q: "Which actor played Iron Man in the MCU?", opts: ["Evans","Hemsworth","Downey Jr","Holland"], a: "Downey Jr" },
      { q: "Which film franchise features Vin Diesel?", opts: ["Mission Impossible","Fast & Furious","The Matrix","Die Hard"], a: "Fast & Furious" }
    ]
  }
};

const DIFFICULTY_CONFIG = {
  easy:   { time: 20, skipPenalty: 0,  label: 'Easy' },
  medium: { time: 15, skipPenalty: 0,  label: 'Medium' },
  hard:   { time: 10, skipPenalty: -1, label: 'Hard' }
};

const LOCAL_KEY  = 'qv_leaderboard_v2';
const THEME_KEY  = 'qv_theme';
const DIFF_KEY   = 'qv_diff';
const OPT_KEYS   = ['A','B','C','D'];

/* ══════════════════════════════════════════
   STATE
══════════════════════════════════════════ */
const state = {
  currentScreen: 'front-page',
  difficulty: localStorage.getItem(DIFF_KEY) || 'medium',
  category: null,
  quizData: [],
  currentIndex: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  timerInterval: null,
  timeLeft: 15,
  answered: false,
  paused: false,
  questionHistory: [],   // { question, correct, userAnswer, wasCorrect }
  scoreSaved: false
};

/* ══════════════════════════════════════════
   DOM CACHE
══════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const DOM = {
  frontPage:       $('front-page'),
  diffScreen:      $('difficulty-screen'),
  catScreen:       $('categories'),
  quizSection:     $('quiz-section'),
  resultScreen:    $('result-screen'),
  reviewScreen:    $('review-screen'),
  catGrid:         $('cat-grid'),
  startBtn:        $('start-btn'),
  diffContinueBtn: $('diff-continue-btn'),
  backToDiffBtn:   $('back-to-diff-btn'),
  themeToggle:     $('theme-toggle'),
  // Quiz UI
  quizCategoryTitle: $('quiz-category-title'),
  scoreEl:           $('score'),
  streakDisplay:     $('streak-display'),
  streakCount:       $('streak-count'),
  timerBar:          $('timer-bar'),
  timeText:          $('time-text'),
  progressFill:      $('progress-fill'),
  progressLabel:     $('progress-label'),
  questionCard:      $('question-card'),
  questionText:      $('question-text'),
  optionsEl:         $('options'),
  skipBtn:           $('skip-btn'),
  restartBtn:        $('restart-btn'),
  pauseBtn:          $('pause-btn'),
  pauseOverlay:      $('pause-overlay'),
  resumeBtn:         $('resume-btn'),
  quitBtn:           $('quit-btn'),
  // Result
  resultEmoji:   $('result-emoji'),
  resultTitle:   $('result-title'),
  finalScore:    $('final-score'),
  resultTotal:   $('result-total'),
  resultMsg:     $('result-msg'),
  leaderboardList: $('leaderboard-list'),
  saveScoreBtn:    $('save-score-btn'),
  reviewBtn:       $('review-btn'),
  playAgainBtn:    $('play-again-btn'),
  changeCatBtn:    $('change-cat-btn'),
  // Review
  reviewList:    $('review-list'),
  reviewBackBtn: $('review-back-btn'),
  // Misc
  confettiCanvas: $('confetti-canvas'),
  comboToast:     $('combo-toast'),
  announcer:      $('announcer')
};

/* ══════════════════════════════════════════
   SCREEN MANAGEMENT
══════════════════════════════════════════ */
function showScreen(screenId) {
  ['front-page','difficulty-screen','categories','quiz-section','result-screen','review-screen']
    .forEach(id => {
      const el = $(id);
      if (el) el.classList.add('hidden');
    });
  const target = $(screenId);
  if (target) {
    target.classList.remove('hidden');
    // Reliably re-trigger CSS animation by toggling a class
    target.classList.remove('screen-animate');
    void target.offsetWidth; // force reflow
    target.classList.add('screen-animate');
  }
  state.currentScreen = screenId;
}

/* ══════════════════════════════════════════
   THEME
══════════════════════════════════════════ */
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'dark';
  setTheme(saved);
}
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  DOM.themeToggle.querySelector('.theme-icon').textContent = theme === 'dark' ? '🌙' : '☀️';
  localStorage.setItem(THEME_KEY, theme);
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
}

/* ══════════════════════════════════════════
   CATEGORY GRID
══════════════════════════════════════════ */
function buildCategoryGrid() {
  DOM.catGrid.innerHTML = '';
  Object.entries(CATEGORIES_DATA).forEach(([key, cat]) => {
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.setAttribute('data-category', key);
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${cat.label} quiz`);
    card.innerHTML = `
      <span class="cat-icon" aria-hidden="true">${cat.icon}</span>
      <h2>${cat.label}</h2>
      <p>${cat.desc}</p>
      <button class="cat-start-btn" tabindex="-1" aria-hidden="true">Start Quiz</button>
    `;
    card.addEventListener('click', (e) => {
      // Prevent double-fire from inner button bubbling
      if (e.target.classList.contains('cat-start-btn')) e.stopPropagation();
      startCategoryQuiz(key);
    });
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') startCategoryQuiz(key); });
    DOM.catGrid.appendChild(card);
  });
}

/* ══════════════════════════════════════════
   DIFFICULTY
══════════════════════════════════════════ */
function initDifficultyButtons() {
  document.querySelectorAll('.diff-card').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.diff === state.difficulty);
    btn.addEventListener('click', () => {
      document.querySelectorAll('.diff-card').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.difficulty = btn.dataset.diff;
      localStorage.setItem(DIFF_KEY, state.difficulty);
    });
  });
}

/* ══════════════════════════════════════════
   QUIZ LOGIC
══════════════════════════════════════════ */
function startCategoryQuiz(categoryKey) {
  state.category = categoryKey;
  const raw = CATEGORIES_DATA[categoryKey].questions;
  // Shuffle questions
  state.quizData = shuffleArray([...raw]);
  resetQuizState();
  showScreen('quiz-section');
  DOM.quizCategoryTitle.textContent = `${CATEGORIES_DATA[categoryKey].icon} ${CATEGORIES_DATA[categoryKey].label}`;
  loadQuestion();
}

function resetQuizState() {
  state.currentIndex = 0;
  state.score = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.answered = false;
  state.paused = false;
  state.questionHistory = [];
  state.scoreSaved = false;
  DOM.scoreEl.textContent = '0';
  DOM.streakCount.textContent = '';
  DOM.progressFill.style.width = '0%';
  DOM.saveScoreBtn.disabled = false;
  clearTimer();
}

function loadQuestion() {
  state.answered = false;
  clearTimer();

  const q = state.quizData[state.currentIndex];
  if (!q) { endQuiz(); return; }

  const totalQ = state.quizData.length;
  const diff   = DIFFICULTY_CONFIG[state.difficulty];

  // Progress
  DOM.progressFill.style.width = `${(state.currentIndex / totalQ) * 100}%`;
  DOM.progressLabel.textContent = `${state.currentIndex + 1} / ${totalQ}`;
  announce(`Question ${state.currentIndex + 1} of ${totalQ}`);

  // Build options (shuffle them too)
  const shuffledOpts = shuffleArray([...q.opts]);

  // Slide out → update → slide in
  DOM.questionCard.classList.add('slide-out');
  setTimeout(() => {
    DOM.questionText.textContent = q.q;
    buildOptions(shuffledOpts, q.a);
    DOM.questionCard.classList.remove('slide-out');
    DOM.questionCard.classList.add('slide-in');
    DOM.questionCard.addEventListener('animationend', () => DOM.questionCard.classList.remove('slide-in'), { once: true });
    startTimer(diff.time);
  }, 220);
}

function buildOptions(opts, correctAnswer) {
  DOM.optionsEl.innerHTML = '';
  // Remove old keydown listener to prevent accumulation
  DOM.optionsEl.removeEventListener('keydown', handleOptionKeyNav);

  opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', 'false');
    btn.setAttribute('tabindex', i === 0 ? '0' : '-1');
    btn.dataset.index = i;
    btn.innerHTML = `<span class="opt-letter" aria-hidden="true">${OPT_KEYS[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', e => {
      addRipple(e);
      selectAnswer(opt, correctAnswer);
    });
    DOM.optionsEl.appendChild(btn);
  });
  // Arrow key navigation
  DOM.optionsEl.addEventListener('keydown', handleOptionKeyNav);
}

function handleOptionKeyNav(e) {
  const options = [...DOM.optionsEl.querySelectorAll('.option:not([disabled])')];
  const focused = document.activeElement;
  const idx = options.indexOf(focused);
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    e.preventDefault();
    options[(idx + 1) % options.length]?.focus();
  } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    e.preventDefault();
    options[(idx - 1 + options.length) % options.length]?.focus();
  } else if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    focused?.click();
  }
}

function selectAnswer(selected, correct) {
  if (state.answered || state.paused) return;
  state.answered = true;
  clearTimer();

  const wasCorrect = selected === correct;

  // Record history
  state.questionHistory.push({
    question: state.quizData[state.currentIndex].q,
    correct,
    userAnswer: selected,
    wasCorrect
  });

  // Style options
  DOM.optionsEl.querySelectorAll('.option').forEach(btn => {
    btn.disabled = true;
    btn.setAttribute('tabindex', '-1');
    const text = btn.querySelector('span:last-child').textContent;
    if (text === correct)  btn.classList.add('correct');
    if (text === selected && !wasCorrect) btn.classList.add('wrong');
  });

  if (wasCorrect) {
    state.score++;
    state.streak++;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    DOM.scoreEl.textContent = state.score;
    updateStreakDisplay();
    if (state.streak >= 3) showComboToast(state.streak);
    announce(`Correct! Score: ${state.score}`);
  } else {
    state.streak = 0;
    updateStreakDisplay();
    announce(`Wrong. The correct answer was ${correct}`);
  }

  setTimeout(advanceQuestion, 1300);
}

function handleTimeUp() {
  if (state.answered) return;
  state.answered = true;
  state.streak = 0;
  updateStreakDisplay();

  // Reveal correct answer
  state.questionHistory.push({
    question: state.quizData[state.currentIndex].q,
    correct: state.quizData[state.currentIndex].a,
    userAnswer: 'Time Up',
    wasCorrect: false
  });

  DOM.optionsEl.querySelectorAll('.option').forEach(btn => {
    btn.disabled = true;
    const text = btn.querySelector('span:last-child').textContent;
    if (text === state.quizData[state.currentIndex].a) btn.classList.add('correct');
  });

  announce("Time's up!");
  setTimeout(advanceQuestion, 1300);
}

function handleSkip() {
  if (state.answered || state.paused) return;
  clearTimer();
  const diff = DIFFICULTY_CONFIG[state.difficulty];

  state.questionHistory.push({
    question: state.quizData[state.currentIndex].q,
    correct: state.quizData[state.currentIndex].a,
    userAnswer: 'Skipped',
    wasCorrect: false
  });

  if (diff.skipPenalty && state.score > 0) {
    state.score = Math.max(0, state.score + diff.skipPenalty);
    DOM.scoreEl.textContent = state.score;
  }
  state.streak = 0;
  updateStreakDisplay();
  announce('Question skipped');
  advanceQuestion();
}

function advanceQuestion() {
  state.currentIndex++;
  if (state.currentIndex < state.quizData.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

/* ══════════════════════════════════════════
   TIMER
══════════════════════════════════════════ */
function startTimer(seconds) {
  state.timeLeft = seconds;
  updateTimerUI(seconds, seconds);

  state.timerInterval = setInterval(() => {
    if (state.paused) return;
    state.timeLeft--;
    updateTimerUI(state.timeLeft, seconds);
    if (state.timeLeft <= 0) {
      clearTimer();
      handleTimeUp();
    }
  }, 1000);
}

function updateTimerUI(current, total) {
  const pct = (current / total) * 100;
  DOM.timerBar.style.width = `${pct}%`;
  DOM.timeText.textContent = `${current}s`;

  DOM.timerBar.classList.remove('warn','danger');
  if (pct <= 25) DOM.timerBar.classList.add('danger');
  else if (pct <= 50) DOM.timerBar.classList.add('warn');
}

function clearTimer() {
  clearInterval(state.timerInterval);
  state.timerInterval = null;
}

/* ══════════════════════════════════════════
   PAUSE / RESUME
══════════════════════════════════════════ */
function pauseQuiz() {
  if (state.answered) return;
  state.paused = true;
  DOM.pauseOverlay.classList.remove('hidden');
  DOM.pauseBtn.textContent = '▶';
  DOM.pauseBtn.setAttribute('aria-label', 'Resume quiz');
}

function resumeQuiz() {
  state.paused = false;
  DOM.pauseOverlay.classList.add('hidden');
  DOM.pauseBtn.textContent = '⏸';
  DOM.pauseBtn.setAttribute('aria-label', 'Pause quiz');
}

/* ══════════════════════════════════════════
   STREAK DISPLAY
══════════════════════════════════════════ */
function updateStreakDisplay() {
  if (state.streak >= 2) {
    const fire = state.streak >= 5 ? '🔥🔥' : '🔥';
    DOM.streakCount.textContent = `${fire} ${state.streak} streak!`;
    DOM.streakCount.style.color = state.streak >= 5 ? 'var(--accent-4)' : 'var(--accent-2)';
  } else {
    DOM.streakCount.textContent = '';
  }
}

/* ══════════════════════════════════════════
   COMBO TOAST
══════════════════════════════════════════ */
let comboTimeout;
function showComboToast(streak) {
  clearTimeout(comboTimeout);
  const msgs = { 3:'🔥 3 in a row!', 4:'⚡ 4 Combo!', 5:'💥 5x Blazing!', 6:'🌟 Unstoppable!', 7:'🚀 Legendary!' };
  const msg = msgs[Math.min(streak, 7)] || `🌟 ${streak}x COMBO!`;
  DOM.comboToast.textContent = msg;
  DOM.comboToast.classList.remove('hidden');
  comboTimeout = setTimeout(() => DOM.comboToast.classList.add('hidden'), 1600);
}

/* ══════════════════════════════════════════
   END QUIZ
══════════════════════════════════════════ */
function endQuiz() {
  clearTimer();
  const total = state.quizData.length;
  const pct   = Math.round((state.score / total) * 100);

  DOM.finalScore.textContent = state.score;
  DOM.resultTotal.textContent = `/ ${total}`;

  let emoji, title, msg;
  if (pct === 100) { emoji = '🏆'; title = 'Perfect Score!';   msg = `Flawless! You nailed every question.`; }
  else if (pct >= 80) { emoji = '🎉'; title = 'Excellent!';    msg = `Great job! ${state.score}/${total} correct.`; }
  else if (pct >= 60) { emoji = '😊'; title = 'Well Done!';    msg = `Solid effort! Keep it up.`; }
  else if (pct >= 40) { emoji = '🙂'; title = 'Not Bad!';      msg = `You're getting there. Practice makes perfect!`; }
  else                { emoji = '😅'; title = 'Keep Trying!';  msg = `Better luck next time!`; }

  if (state.maxStreak >= 3) msg += ` Best streak: ${state.maxStreak} 🔥`;

  DOM.resultEmoji.textContent = emoji;
  DOM.resultTitle.textContent = title;
  DOM.resultMsg.textContent   = msg;

  DOM.progressFill.style.width = '100%';

  renderLeaderboard();
  showScreen('result-screen');

  if (pct >= 80) launchConfetti();
}

/* ══════════════════════════════════════════
   LEADERBOARD
══════════════════════════════════════════ */
function getLeaderboard() {
  try { return JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]'); }
  catch { return []; }
}

function saveLeaderboard(scores) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(scores));
}

function renderLeaderboard() {
  const scores = getLeaderboard();
  DOM.leaderboardList.innerHTML = '';
  if (!scores.length) {
    DOM.leaderboardList.innerHTML = '<li style="opacity:0.6;list-style:none;padding:6px 0">No scores yet — be the first!</li>';
    return;
  }
  scores.slice(0, 10).forEach((item, i) => {
    const li = document.createElement('li');
    const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i+1}.`;
    li.textContent = `${medal} ${item.name}  —  ${item.score}  (${item.category || '?'}, ${item.difficulty || '?'})`;
    DOM.leaderboardList.appendChild(li);
  });
}

function saveScore() {
  const name = prompt('Enter your name (max 20 chars):');
  if (!name || !name.trim()) return;
  const scores = getLeaderboard();
  scores.push({
    name: name.trim().slice(0, 20),
    score: state.score,
    category: state.category,
    difficulty: state.difficulty,
    date: new Date().toLocaleDateString()
  });
  scores.sort((a, b) => b.score - a.score);
  saveLeaderboard(scores.slice(0, 20));
  renderLeaderboard();
  DOM.saveScoreBtn.disabled = true;
  state.scoreSaved = true;
}

/* ══════════════════════════════════════════
   REVIEW SCREEN
══════════════════════════════════════════ */
function showReview() {
  DOM.reviewList.innerHTML = '';
  state.questionHistory.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = `review-item ${item.wasCorrect ? 'correct-item' : 'wrong-item'}`;
    div.innerHTML = `
      <div class="review-q">${i+1}. ${item.question}</div>
      <div class="review-answers">
        <span class="correct-ans">✅ Correct: ${item.correct}</span>
        ${!item.wasCorrect ? `<span class="wrong-ans">❌ Your answer: ${item.userAnswer}</span>` : ''}
      </div>
    `;
    DOM.reviewList.appendChild(div);
  });
  showScreen('review-screen');
}

/* ══════════════════════════════════════════
   CONFETTI
══════════════════════════════════════════ */
function launchConfetti() {
  const canvas = DOM.confettiCanvas;
  const ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 160 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 8 + 3,
    d: Math.random() * 2 + 1,
    color: `hsl(${Math.random()*360},70%,60%)`,
    tilt: Math.random() * 10 - 5,
    tiltDir: Math.random() > 0.5 ? 1 : -1
  }));

  let frame;
  let elapsed = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, p.r, p.r * 0.5, p.tilt * Math.PI / 180, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y  += p.d + 1;
      p.x  += Math.sin(elapsed * 0.02 + p.tilt) * 0.5;
      p.tilt += p.tiltDir * 0.1;
    });
    elapsed++;
    if (elapsed < 220) {
      frame = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  cancelAnimationFrame(frame);
  draw();
}

/* ══════════════════════════════════════════
   UTILITIES
══════════════════════════════════════════ */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function addRipple(e) {
  const btn    = e.currentTarget;
  const circle = document.createElement('span');
  const rect   = btn.getBoundingClientRect();
  const size   = Math.max(rect.width, rect.height);
  circle.className = 'ripple';
  circle.style.cssText = `
    width: ${size}px; height: ${size}px;
    left: ${e.clientX - rect.left - size/2}px;
    top:  ${e.clientY - rect.top  - size/2}px;
  `;
  btn.appendChild(circle);
  circle.addEventListener('animationend', () => circle.remove(), { once: true });
}

function addBtnRipple(btn) {
  btn.addEventListener('click', e => addRipple(e));
}

function announce(msg) {
  DOM.announcer.textContent = '';
  requestAnimationFrame(() => { DOM.announcer.textContent = msg; });
}

/* ══════════════════════════════════════════
   EVENT LISTENERS
══════════════════════════════════════════ */
function initListeners() {
  // Theme
  DOM.themeToggle.addEventListener('click', toggleTheme);

  // Front page
  DOM.startBtn.addEventListener('click', () => {
    showScreen('difficulty-screen');
  });

  // Difficulty → Categories
  DOM.diffContinueBtn.addEventListener('click', () => {
    buildCategoryGrid();
    showScreen('categories');
  });
  DOM.backToDiffBtn.addEventListener('click', () => showScreen('difficulty-screen'));

  // Quiz controls
  DOM.skipBtn.addEventListener('click', handleSkip);
  DOM.restartBtn.addEventListener('click', () => {
    clearTimer();
    startCategoryQuiz(state.category);
  });
  DOM.pauseBtn.addEventListener('click', () => state.paused ? resumeQuiz() : pauseQuiz());
  DOM.resumeBtn.addEventListener('click', resumeQuiz);
  DOM.quitBtn.addEventListener('click', () => {
    resumeQuiz();
    clearTimer();
    showScreen('categories');
  });

  // Result
  DOM.saveScoreBtn.addEventListener('click', saveScore);
  DOM.reviewBtn.addEventListener('click', showReview);
  DOM.playAgainBtn.addEventListener('click', () => startCategoryQuiz(state.category));
  DOM.changeCatBtn.addEventListener('click', () => {
    buildCategoryGrid();
    showScreen('categories');
  });

  // Review
  DOM.reviewBackBtn.addEventListener('click', () => showScreen('result-screen'));

  // Global keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (!DOM.pauseOverlay.classList.contains('hidden')) resumeQuiz();
      else if (state.currentScreen === 'quiz-section') pauseQuiz();
    }
    if (e.key === 'p' || e.key === 'P') {
      if (state.currentScreen === 'quiz-section') {
        state.paused ? resumeQuiz() : pauseQuiz();
      }
    }
  });

  // Ripples on all buttons
  document.querySelectorAll('.btn').forEach(addBtnRipple);

  // Handle resize for confetti canvas
  window.addEventListener('resize', () => {
    DOM.confettiCanvas.width  = window.innerWidth;
    DOM.confettiCanvas.height = window.innerHeight;
  });
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
function init() {
  initTheme();
  initDifficultyButtons();
  initListeners();
  showScreen('front-page');
}

document.addEventListener('DOMContentLoaded', init);
