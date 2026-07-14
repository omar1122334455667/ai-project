/* ============================================================
   GAMES.JS – AI for Kids  |  7 Games
   ============================================================ */

/* ---------- AI Facts Pool ---------- */
const AI_FACTS = [
    "AI stands for Artificial Intelligence — machines that can learn and make decisions!",
    "Neural networks are inspired by the human brain's structure!",
    "AI can recognize faces in photos — that's called computer vision!",
    "ChatGPT is a type of AI called a Large Language Model (LLM)!",
    "AI learns from data, just like you learn from examples!",
    "Self-driving cars use AI to see the road and make decisions!",
    "AI can translate languages in real time — like a universal translator!",
    "Machine Learning is a way to teach computers without explicitly programming them!",
    "AI can beat humans at chess, Go, and even video games!",
    "Recommendation systems (like YouTube) use AI to guess what you'll enjoy!",
    "AI robots can help doctors perform surgeries more precisely!",
    "Deep learning uses many layers of neural networks to understand complex patterns!",
    "AI can generate art, music, and even write stories!",
    "Voice assistants like Siri and Alexa use AI to understand your questions!",
    "AI is used in weather forecasting to predict storms more accurately!",
    "Facial recognition technology uses AI to identify people in photos!",
    "AI can help farmers grow more food by analyzing soil and weather data!",
    "Autonomous drones use AI to fly and explore without human control!",
    "AI algorithms can detect diseases earlier than some doctors!",
    "Reinforcement learning lets AI learn by trial and error, like playing a game!",
    "AI ethics is about making sure AI is used fairly and safely!",
    "Natural Language Processing lets AI understand human speech and text!",
    "AI-powered robots can sort recycling and help protect the environment!",
    "Generative AI can create new images and content that never existed before!",
    "AI can analyze thousands of medical scans in seconds to find problems!",
    "The first AI program was written in 1951 by Christopher Strachey!",
    "AI can predict protein structures, helping scientists create new medicines!",
    "Autonomous vehicles use AI sensors to navigate roads safely!",
    "AI tutors can adapt to each student's learning speed and style!",
    "Computer graphics in movies use AI to create realistic special effects!",
    "AI can analyze animal sounds to track wildlife and protect endangered species!",
    "Smart homes use AI to adjust lighting, temperature, and security automatically!",
    "AI can help discover new planets by analyzing telescope data!",
    "DeepMind's AlphaFold solved a 50-year-old biology problem using AI!",
    "AI can detect fake news and misinformation online!",
    "Wearable devices use AI to monitor your health in real time!",
    "AI music composers can create symphonies that sound like classical masters!",
    "Traffic lights in smart cities use AI to reduce congestion!",
    "AI can recreate lost art and ancient languages!",
    "Quantum computing + AI could solve problems we can't even imagine today!"
];

const collectedFacts = new Set();

function showFact(containerId, textId) {
    const unused = AI_FACTS.filter(f => !collectedFacts.has(f));
    if (unused.length === 0) return;
    const fact = unused[Math.floor(Math.random() * unused.length)];
    collectedFacts.add(fact);
    document.getElementById(textId).textContent = fact;
    document.getElementById(containerId).classList.remove('hidden');
    updateFactsGrid();
}

function updateFactsGrid() {
    const grid = document.getElementById('factsGrid');
    if (!grid) return;
    if (collectedFacts.size === 0) {
        grid.innerHTML = '<div class="fact-empty">Win games to collect AI facts here!</div>';
        return;
    }
    grid.innerHTML = '';
    collectedFacts.forEach(f => {
        const div = document.createElement('div');
        div.className = 'fact-collected';
        div.innerHTML = '<span class="fact-icon">🧠</span><p>' + f + '</p>';
        grid.appendChild(div);
    });
}

/* ---------- Nav & Theme ---------- */
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (toggle && menu) {
        toggle.addEventListener('click', function () { menu.classList.toggle('show'); });
    }

    const themeBtn = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    if (themeBtn) {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (icon) icon.textContent = '☀️';
        }
        themeBtn.addEventListener('click', function () {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                if (icon) icon.textContent = '🌙';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if (icon) icon.textContent = '☀️';
            }
        });
    }

    /* Close mobile nav on link click */
    document.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            if (menu) menu.classList.remove('show');
        });
    });

    initTTT();
    initMemory();
    initPuzzle();
    resetC4();
    initColorTheme();
    initPixelCanvas();
});

/* ---------- Game Switching ---------- */
function scrollTabs(dir) {
    var tabs = document.getElementById('gameTabs');
    if (!tabs) return;
    var scrollAmount = 200;
    tabs.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
}

function switchGame(name) {
    document.querySelectorAll('.game-section').forEach(function (s) {
        s.classList.remove('active');
    });
    document.querySelectorAll('.game-tab').forEach(function (t) {
        t.classList.remove('active');
    });
    var section = document.getElementById(name);
    if (section) section.classList.add('active');
    var tab = document.querySelector('.game-tab[data-game="' + name + '"]');
    if (tab) tab.classList.add('active');

    /* Hide all facts */
    document.querySelectorAll('.win-fact').forEach(function (f) { f.classList.add('hidden'); });

    /* Update nav links */
    document.querySelectorAll('.nav-link').forEach(function (l) { l.classList.remove('active'); });
    var navLink = document.querySelector('.nav-link[href="#' + name + '"]');
    if (navLink) navLink.classList.add('active');

    /* Update hero */
    var heroSub = document.getElementById('heroSub');
    var msgs = {
        tictactoe: 'Choose your difficulty and try to beat the AI!',
        snake: 'Eat the food, grow the snake, and avoid walls!',
        memory: 'Flip cards and find all the matching pairs!',
        whack: 'Click the moles before they hide underground!',
        puzzle2048: 'Slide tiles and combine numbers to reach 2048!',
        connect4: 'Drop discs and connect four in a row to win!',
        simon: 'Watch the pattern and repeat it back!',
        breakout: 'Smash all the bricks with the ball!',
        pong: 'Beat the AI to 7 points!',
        spaceinv: 'Shoot the aliens before they reach you!',
        flappy: 'Tap to fly through the pipes!',
        reaction: 'Click as fast as you can when the color changes!',
        wordscramble: 'Unscramble the letters to find the word!',
        numguess: 'Guess the secret number!',
        rps: 'Beat the AI in Rock Paper Scissors!',
        maze: 'Navigate from start to finish!',
        typing: 'Type the words as fast as you can!'
    };
    if (heroSub) heroSub.textContent = msgs[name] || '';
}

/* ============================================================
   GAME 1: TIC TAC TOE  (5 difficulty levels)
   ============================================================ */
var tttBoard = ['', '', '', '', '', '', '', '', ''];
var tttLevel = 'easy';
var tttWins = 0, tttLosses = 0, tttDraws = 0;
var tttGameOver = false;

var TTT_COMBOS = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

function setTTTLevel(level) {
    tttLevel = level;
    document.querySelectorAll('#tttDiffBar .diff-btn').forEach(function (b) { b.classList.remove('active'); });
    event.target.classList.add('active');
    resetTTT();
}

function resetTTT() {
    tttBoard = ['', '', '', '', '', '', '', '', ''];
    tttGameOver = false;
    var cells = document.querySelectorAll('#tttBoard .ttt-cell');
    cells.forEach(function (c) {
        c.textContent = '';
        c.className = 'ttt-cell';
    });
    document.getElementById('tttStatus').innerHTML = 'Your turn! You are <span class="x-color">X</span>';
    document.getElementById('tttFact').classList.add('hidden');
}

function tttMove(i) {
    if (tttGameOver || tttBoard[i] !== '') return;
    tttBoard[i] = 'X';
    renderTTT();

    var result = tttCheckWinner();
    if (result === 'X') {
        tttGameOver = true;
        tttWins++;
        document.getElementById('tttWins').textContent = tttWins;
        document.getElementById('tttStatus').innerHTML = '🎉 You win!';
        showFact('tttFact', 'tttFactText');
        return;
    }
    if (result === 'draw') {
        tttGameOver = true;
        tttDraws++;
        document.getElementById('tttDraws').textContent = tttDraws;
        document.getElementById('tttStatus').textContent = '🤝 It\'s a draw!';
        return;
    }

    document.getElementById('tttStatus').innerHTML = 'AI is thinking...';
    setTimeout(function () {
        tttAI();
        renderTTT();
        var r2 = tttCheckWinner();
        if (r2 === 'O') {
            tttGameOver = true;
            tttLosses++;
            document.getElementById('tttLosses').textContent = tttLosses;
            document.getElementById('tttStatus').innerHTML = '😢 AI wins!';
            showFact('tttFact', 'tttFactText');
            return;
        }
        if (r2 === 'draw') {
            tttGameOver = true;
            tttDraws++;
            document.getElementById('tttDraws').textContent = tttDraws;
            document.getElementById('tttStatus').textContent = '🤝 It\'s a draw!';
            return;
        }
        document.getElementById('tttStatus').innerHTML = 'Your turn! You are <span class="x-color">X</span>';
    }, 300);
}

function renderTTT() {
    var cells = document.querySelectorAll('#tttBoard .ttt-cell');
    cells.forEach(function (c, i) {
        c.textContent = tttBoard[i];
        c.className = 'ttt-cell';
        if (tttBoard[i] === 'X') c.classList.add('x');
        if (tttBoard[i] === 'O') c.classList.add('o');
    });
}

function tttCheckWinner() {
    for (var i = 0; i < TTT_COMBOS.length; i++) {
        var a = TTT_COMBOS[i][0], b = TTT_COMBOS[i][1], c = TTT_COMBOS[i][2];
        if (tttBoard[a] && tttBoard[a] === tttBoard[b] && tttBoard[a] === tttBoard[c]) {
            var cells = document.querySelectorAll('#tttBoard .ttt-cell');
            cells[a].classList.add('win');
            cells[b].classList.add('win');
            cells[c].classList.add('win');
            return tttBoard[a];
        }
    }
    if (tttBoard.every(function (c) { return c !== ''; })) return 'draw';
    return null;
}

/* --- AI Logic --- */
function tttAI() {
    var move = -1;
    if (tttLevel === 'easy') {
        move = tttEasyMove();
    } else if (tttLevel === 'medium') {
        move = Math.random() < 0.5 ? tttSmartMove() : tttEasyMove();
    } else if (tttLevel === 'hard') {
        move = Math.random() < 0.8 ? tttBestMove() : tttSmartMove();
    } else if (tttLevel === 'veryhard') {
        move = Math.random() < 0.95 ? tttBestMove() : tttSmartMove();
    } else {
        move = tttBestMove(); /* impossible */
    }
    if (move >= 0) tttBoard[move] = 'O';
}

function tttEasyMove() {
    var empty = [];
    tttBoard.forEach(function (v, i) { if (v === '') empty.push(i); });
    return empty.length ? empty[Math.floor(Math.random() * empty.length)] : -1;
}

function tttSmartMove() {
    /* Block wins or take wins, else random */
    var b = tttBoard;
    for (var i = 0; i < 9; i++) {
        if (b[i] === '') { b[i] = 'O'; if (tttCheckRaw(b) === 'O') { b[i] = ''; return i; } b[i] = ''; }
    }
    for (var i = 0; i < 9; i++) {
        if (b[i] === '') { b[i] = 'X'; if (tttCheckRaw(b) === 'X') { b[i] = ''; return i; } b[i] = ''; }
    }
    if (b[4] === '') return 4;
    return tttEasyMove();
}

function tttBestMove() {
    var best = -1, bestScore = -Infinity;
    for (var i = 0; i < 9; i++) {
        if (tttBoard[i] === '') {
            tttBoard[i] = 'O';
            var score = tttMinimax(tttBoard, 0, false);
            tttBoard[i] = '';
            if (score > bestScore) { bestScore = score; best = i; }
        }
    }
    return best;
}

function tttMinimax(b, depth, isMax) {
    var r = tttCheckRaw(b);
    if (r === 'O') return 10 - depth;
    if (r === 'X') return depth - 10;
    if (b.every(function (c) { return c !== ''; })) return 0;

    if (isMax) {
        var best = -Infinity;
        for (var i = 0; i < 9; i++) {
            if (b[i] === '') { b[i] = 'O'; best = Math.max(best, tttMinimax(b, depth + 1, false)); b[i] = ''; }
        }
        return best;
    } else {
        var best = Infinity;
        for (var i = 0; i < 9; i++) {
            if (b[i] === '') { b[i] = 'X'; best = Math.min(best, tttMinimax(b, depth + 1, true)); b[i] = ''; }
        }
        return best;
    }
}

function tttCheckRaw(b) {
    for (var i = 0; i < TTT_COMBOS.length; i++) {
        var a = TTT_COMBOS[i][0], c = TTT_COMBOS[i][1], d = TTT_COMBOS[i][2];
        if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a];
    }
    return null;
}

/* ============================================================
   GAME 2: SNAKE
   ============================================================ */
var snakeCanvas, snakeCtx;
var snake, food, snakeDir_, snakeNextDir;
var snakeScore, snakeBest = 0;
var snakeInterval, snakeSpeed;
var snakeRunning = false;
var snakeLevel = 'easy';

var SNAKE_SPEEDS = { easy: 160, medium: 110, hard: 75, veryhard: 50 };
var SNAKE_GRID = 20;

function setSnakeLevel(level) {
    snakeLevel = level;
    document.querySelectorAll('#snake .diff-btn').forEach(function (b) { b.classList.remove('active'); });
    event.target.classList.add('active');
    snakeSpeed = SNAKE_SPEEDS[level];
    if (snakeRunning) { clearInterval(snakeInterval); snakeInterval = setInterval(snakeTick, snakeSpeed); }
    resetSnake();
}

function initSnakeCanvas() {
    snakeCanvas = document.getElementById('snakeCanvas');
    snakeCtx = snakeCanvas.getContext('2d');
}

function startSnake() {
    if (!snakeCanvas) initSnakeCanvas();
    if (snakeRunning) return;
    snakeRunning = true;
    snake = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
    snakeDir_ = 'right';
    snakeNextDir = 'right';
    snakeScore = 0;
    snakeSpeed = SNAKE_SPEEDS[snakeLevel] || 110;
    document.getElementById('snakeScore').textContent = '0';
    document.getElementById('snakeStatus').textContent = 'Playing...';
    document.getElementById('snakeFact').classList.add('hidden');
    spawnFood();
    snakeInterval = setInterval(snakeTick, snakeSpeed);
}

function resetSnake() {
    snakeRunning = false;
    clearInterval(snakeInterval);
    snakeScore = 0;
    if (!snakeCanvas) initSnakeCanvas();
    snakeCtx.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);
    document.getElementById('snakeScore').textContent = '0';
    document.getElementById('snakeStatus').textContent = 'Press Start to play!';
    document.getElementById('snakeFact').classList.add('hidden');
}

function snakeDir(dir) {
    var opposite = { up: 'down', down: 'up', left: 'right', right: 'left' };
    if (dir !== opposite[snakeDir_]) snakeNextDir = dir;
}

function spawnFood() {
    do {
        food = { x: Math.floor(Math.random() * (snakeCanvas.width / SNAKE_GRID)), y: Math.floor(Math.random() * (snakeCanvas.height / SNAKE_GRID)) };
    } while (snake.some(function (s) { return s.x === food.x && s.y === food.y; }));
}

function snakeTick() {
    snakeDir_ = snakeNextDir;
    var head = { x: snake[0].x, y: snake[0].y };
    if (snakeDir_ === 'up') head.y--;
    else if (snakeDir_ === 'down') head.y++;
    else if (snakeDir_ === 'left') head.x--;
    else if (snakeDir_ === 'right') head.x++;

    var maxGrid = snakeCanvas.width / SNAKE_GRID;
    if (head.x < 0 || head.x >= maxGrid || head.y < 0 || head.y >= maxGrid || snake.some(function (s) { return s.x === head.x && s.y === head.y; })) {
        clearInterval(snakeInterval);
        snakeRunning = false;
        if (snakeScore > snakeBest) { snakeBest = snakeScore; document.getElementById('snakeBest').textContent = snakeBest; }
        document.getElementById('snakeStatus').textContent = '💀 Game Over! Score: ' + snakeScore;
        showFact('snakeFact', 'snakeFactText');
        return;
    }

    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        snakeScore += 10;
        document.getElementById('snakeScore').textContent = snakeScore;
        spawnFood();
    } else {
        snake.pop();
    }

    drawSnake();
}

function drawSnake() {
    var gs = SNAKE_GRID;
    snakeCtx.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);

    /* Food */
    snakeCtx.fillStyle = '#FF6B35';
    snakeCtx.beginPath();
    snakeCtx.arc(food.x * gs + gs / 2, food.y * gs + gs / 2, gs / 2 - 2, 0, Math.PI * 2);
    snakeCtx.fill();

    /* Snake */
    snake.forEach(function (s, i) {
        snakeCtx.fillStyle = i === 0 ? '#4CAF50' : '#66BB6A';
        snakeCtx.fillRect(s.x * gs + 1, s.y * gs + 1, gs - 2, gs - 2);
        snakeCtx.strokeStyle = '#388E3C';
        snakeCtx.lineWidth = 1;
        snakeCtx.strokeRect(s.x * gs + 1, s.y * gs + 1, gs - 2, gs - 2);
    });
}

/* Keyboard controls */
document.addEventListener('keydown', function (e) {
    var section = document.getElementById('snake');
    if (!section || !section.classList.contains('active')) return;
    var map = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right' };
    if (map[e.key]) { e.preventDefault(); snakeDir(map[e.key]); }
});

/* ============================================================
   GAME 3: MEMORY MATCH
   ============================================================ */
var memCards = [];
var memFlipped = [];
var memMatched = 0;
var memTotalPairs = 4;
var memMoves = 0;
var memLevel = 'easy';
var memTimer = null, memSeconds = 0;
var memLocked = false;

var MEM_EMOJIS = ['🤖','🧠','💡','🚀','🎮','⚡','🔮','🎨','🌟','🎯','🧩','🎪','🌈','🍕','🐱','🦊','🐶','🐸','🦁','🐼'];

function setMemoryLevel(level) {
    memLevel = level;
    document.querySelectorAll('#memory .diff-btn').forEach(function (b) { b.classList.remove('active'); });
    event.target.classList.add('active');
    var counts = { easy: 4, medium: 6, hard: 8, veryhard: 10 };
    memTotalPairs = counts[level];
    document.getElementById('memTotal').textContent = memTotalPairs;
    initMemory();
}

function initMemory() {
    clearInterval(memTimer);
    memTimer = null;
    memSeconds = 0;
    memMoves = 0;
    memMatched = 0;
    memFlipped = [];
    memLocked = false;
    document.getElementById('memMoves').textContent = '0';
    document.getElementById('memPairs').textContent = '0';
    document.getElementById('memTime').textContent = '0s';
    document.getElementById('memStatus').textContent = 'Click any card to start!';
    document.getElementById('memFact').classList.add('hidden');

    var emojis = MEM_EMOJIS.slice(0, memTotalPairs);
    var pairs = emojis.concat(emojis);
    /* Shuffle */
    for (var i = pairs.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = pairs[i]; pairs[i] = pairs[j]; pairs[j] = tmp;
    }
    memCards = pairs;

    var grid = document.getElementById('memoryGrid');
    grid.className = 'memory-grid';
    if (memTotalPairs <= 4) grid.classList.add('cols-4');
    else if (memTotalPairs <= 6) grid.classList.add('cols-5');
    else grid.classList.add('cols-6');

    grid.innerHTML = '';
    pairs.forEach(function (emoji, i) {
        var card = document.createElement('div');
        card.className = 'mem-card';
        card.dataset.index = i;
        card.dataset.emoji = emoji;
        card.textContent = '❓';
        card.addEventListener('click', function () { memFlip(card); });
        grid.appendChild(card);
    });
}

function memFlip(card) {
    if (memLocked || card.classList.contains('flipped') || card.classList.contains('matched')) return;
    if (memFlipped.length >= 2) return;

    if (!memTimer) {
        memTimer = setInterval(function () {
            memSeconds++;
            document.getElementById('memTime').textContent = memSeconds + 's';
        }, 1000);
    }

    card.classList.add('flipped');
    card.textContent = card.dataset.emoji;
    memFlipped.push(card);

    if (memFlipped.length === 2) {
        memMoves++;
        document.getElementById('memMoves').textContent = memMoves;

        if (memFlipped[0].dataset.emoji === memFlipped[1].dataset.emoji) {
            memFlipped[0].classList.add('matched');
            memFlipped[1].classList.add('matched');
            memMatched++;
            document.getElementById('memPairs').textContent = memMatched;
            memFlipped = [];

            if (memMatched === memTotalPairs) {
                clearInterval(memTimer);
                document.getElementById('memStatus').textContent = '🎉 You found all pairs in ' + memMoves + ' moves!';
                showFact('memFact', 'memFactText');
            }
        } else {
            memLocked = true;
            setTimeout(function () {
                memFlipped.forEach(function (c) {
                    c.classList.remove('flipped');
                    c.textContent = '❓';
                });
                memFlipped = [];
                memLocked = false;
            }, 800);
        }
    }
}

/* ============================================================
   GAME 4: WHACK-A-MOLE
   ============================================================ */
var whackScore = 0;
var whackLives = 3;
var whackTimer = null;
var whackMoleTimer = null;
var whackTime = 30;
var whackLevel = 'easy';
var whackRunning = false;

var WHACK_INTERVALS = { easy: 1200, medium: 900, hard: 650, veryhard: 400 };

function setWhackLevel(level) {
    whackLevel = level;
    document.querySelectorAll('#whack .diff-btn').forEach(function (b) { b.classList.remove('active'); });
    event.target.classList.add('active');
    resetWhack();
}

function startWhack() {
    if (whackRunning) return;
    whackRunning = true;
    whackScore = 0;
    whackLives = 3;
    whackTime = 30;
    document.getElementById('whackScore').textContent = '0';
    document.getElementById('whackLives').textContent = '3';
    document.getElementById('whackTime').textContent = '30s';
    document.getElementById('whackStatus').textContent = 'Go!';
    document.getElementById('whackFact').classList.add('hidden');

    /* Hide all moles */
    document.querySelectorAll('.mole').forEach(function (m) { m.classList.remove('show'); });

    whackTimer = setInterval(function () {
        whackTime--;
        document.getElementById('whackTime').textContent = whackTime + 's';
        if (whackTime <= 0) {
            clearInterval(whackTimer);
            clearInterval(whackMoleTimer);
            whackRunning = false;
            document.getElementById('whackStatus').textContent = '⏰ Time\'s up! Score: ' + whackScore;
            if (whackScore >= 20) showFact('whackFact', 'whackFactText');
        }
    }, 1000);

    whackMoleTimer = setInterval(showRandomMole, WHACK_INTERVALS[whackLevel] || 900);
}

function resetWhack() {
    whackRunning = false;
    clearInterval(whackTimer);
    clearInterval(whackMoleTimer);
    whackScore = 0;
    whackLives = 3;
    whackTime = 30;
    document.getElementById('whackScore').textContent = '0';
    document.getElementById('whackLives').textContent = '3';
    document.getElementById('whackTime').textContent = '30s';
    document.getElementById('whackStatus').textContent = 'Press Start to play!';
    document.getElementById('whackFact').classList.add('hidden');
    document.querySelectorAll('.mole').forEach(function (m) { m.classList.remove('show'); });
}

function showRandomMole() {
    document.querySelectorAll('.mole').forEach(function (m) { m.classList.remove('show'); });
    var holes = document.querySelectorAll('.whack-hole');
    var idx = Math.floor(Math.random() * holes.length);
    holes[idx].querySelector('.mole').classList.add('show');
    setTimeout(function () {
        holes[idx].querySelector('.mole').classList.remove('show');
    }, WHACK_INTERVALS[whackLevel] || 900);
}

function whackMole(i) {
    if (!whackRunning) return;
    var holes = document.querySelectorAll('.whack-hole');
    var mole = holes[i].querySelector('.mole');
    if (mole.classList.contains('show')) {
        whackScore += 5;
        document.getElementById('whackScore').textContent = whackScore;
        mole.classList.remove('show');
        holes[i].style.transform = 'scale(0.9)';
        setTimeout(function () { holes[i].style.transform = ''; }, 150);
    } else {
        whackLives--;
        document.getElementById('whackLives').textContent = whackLives;
        if (whackLives <= 0) {
            clearInterval(whackTimer);
            clearInterval(whackMoleTimer);
            whackRunning = false;
            document.getElementById('whackStatus').textContent = '💔 No lives left! Score: ' + whackScore;
            if (whackScore >= 20) showFact('whackFact', 'whackFactText');
        }
    }
}

/* ============================================================
   GAME 5: 2048
   ============================================================ */
var puzzleGrid = [];
var puzzleScore = 0;
var puzzleBest = 0;

function initPuzzle() {
    puzzleGrid = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    puzzleScore = 0;
    document.getElementById('pScore').textContent = '0';
    document.getElementById('pFact').classList.add('hidden');
    document.getElementById('pStatus').textContent = 'Use arrow keys or buttons to play!';
    spawnPuzzleTile();
    spawnPuzzleTile();
    renderPuzzle();
}

function spawnPuzzleTile() {
    var empty = [];
    for (var r = 0; r < 4; r++) {
        for (var c = 0; c < 4; c++) {
            if (puzzleGrid[r][c] === 0) empty.push({ r: r, c: c });
        }
    }
    if (empty.length === 0) return;
    var cell = empty[Math.floor(Math.random() * empty.length)];
    puzzleGrid[cell.r][cell.c] = Math.random() < 0.9 ? 2 : 4;
}

function renderPuzzle() {
    var board = document.getElementById('puzzleBoard');
    board.innerHTML = '';
    var colors = {
        0: '#CDC1B4',
        2: '#EEE4DA',
        4: '#EDE0C8',
        8: '#F2B179',
        16: '#F59563',
        32: '#F67C5F',
        64: '#F65E3B',
        128: '#EDCF72',
        256: '#EDCC61',
        512: '#EDC853',
        1024: '#EDC53F',
        2048: '#EDC22E'
    };
    for (var r = 0; r < 4; r++) {
        for (var c = 0; c < 4; c++) {
            var val = puzzleGrid[r][c];
            var cell = document.createElement('div');
            cell.className = 'puzzle-cell';
            cell.style.background = colors[val] || '#3C3A32';
            cell.style.color = val <= 4 ? '#776E65' : '#F9F6F2';
            cell.style.fontSize = val >= 1024 ? '18px' : val >= 128 ? '22px' : '24px';
            cell.textContent = val || '';
            board.appendChild(cell);
        }
    }
}

function puzzleMove(dir) {
    var moved = false;
    var merged = [[false,false,false,false],[false,false,false,false],[false,false,false,false],[false,false,false,false]];

    function slide(r, c, dr, dc) {
        if (puzzleGrid[r][c] === 0) return;
        var nr = r + dr, nc = c + dc;
        while (nr >= 0 && nr < 4 && nc >= 0 && nc < 4 && puzzleGrid[nr][nc] === 0) {
            puzzleGrid[nr][nc] = puzzleGrid[r][c];
            puzzleGrid[r][c] = 0;
            r = nr; c = nc;
            nr = r + dr; nc = c + dc;
            moved = true;
        }
        if (nr >= 0 && nr < 4 && nc >= 0 && nc < 4 && puzzleGrid[nr][nc] === puzzleGrid[r][c] && !merged[nr][nc]) {
            puzzleGrid[nr][nc] *= 2;
            puzzleGrid[r][c] = 0;
            puzzleScore += puzzleGrid[nr][nc];
            merged[nr][nc] = true;
            moved = true;
        }
    }

    if (dir === 'left') {
        for (var r = 0; r < 4; r++) for (var c = 1; c < 4; c++) slide(r, c, 0, -1);
    } else if (dir === 'right') {
        for (var r = 0; r < 4; r++) for (var c = 2; c >= 0; c--) slide(r, c, 0, 1);
    } else if (dir === 'up') {
        for (var c = 0; c < 4; c++) for (var r = 1; r < 4; r++) slide(r, c, -1, 0);
    } else if (dir === 'down') {
        for (var c = 0; c < 4; c++) for (var r = 2; r >= 0; r--) slide(r, c, 1, 0);
    }

    if (moved) {
        spawnPuzzleTile();
        renderPuzzle();
        document.getElementById('pScore').textContent = puzzleScore;

        var hasWon = false;
        for (var r = 0; r < 4; r++) for (var c = 0; c < 4; c++) if (puzzleGrid[r][c] === 2048) hasWon = true;

        if (hasWon) {
            if (puzzleScore > puzzleBest) { puzzleBest = puzzleScore; document.getElementById('pBest').textContent = puzzleBest; }
            document.getElementById('pStatus').textContent = '🎉 You reached 2048!';
            showFact('pFact', 'pFactText');
            return;
        }

        if (puzzleFull() && !puzzleCanMove()) {
            if (puzzleScore > puzzleBest) { puzzleBest = puzzleScore; document.getElementById('pBest').textContent = puzzleBest; }
            document.getElementById('pStatus').textContent = '💀 Game Over! Score: ' + puzzleScore;
            showFact('pFact', 'pFactText');
        }
    }
}

function puzzleFull() {
    for (var r = 0; r < 4; r++) for (var c = 0; c < 4; c++) if (puzzleGrid[r][c] === 0) return false;
    return true;
}

function puzzleCanMove() {
    for (var r = 0; r < 4; r++) {
        for (var c = 0; c < 4; c++) {
            var v = puzzleGrid[r][c];
            if (c < 3 && v === puzzleGrid[r][c + 1]) return true;
            if (r < 3 && v === puzzleGrid[r + 1][c]) return true;
        }
    }
    return false;
}

document.addEventListener('keydown', function (e) {
    var section = document.getElementById('puzzle2048');
    if (!section || !section.classList.contains('active')) return;
    var map = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right' };
    if (map[e.key]) { e.preventDefault(); puzzleMove(map[e.key]); }
});

/* ============================================================
   GAME 6: CONNECT 4
   ============================================================ */
var c4Board = [];
var c4Level = 'easy';
var c4Wins = 0, c4Losses = 0;
var c4GameOver = false;

function setC4Level(level) {
    c4Level = level;
    document.querySelectorAll('#connect4 .diff-btn').forEach(function (b) { b.classList.remove('active'); });
    event.target.classList.add('active');
    resetC4();
}

function resetC4() {
    c4Board = [];
    for (var r = 0; r < 6; r++) {
        c4Board.push([0, 0, 0, 0, 0, 0, 0]);
    }
    c4GameOver = false;
    document.getElementById('c4Status').innerHTML = 'Your turn! You are 🔴';
    document.getElementById('c4Fact').classList.add('hidden');
    renderC4();
}

function renderC4() {
    var board = document.getElementById('c4Board');
    board.innerHTML = '';
    for (var r = 0; r < 6; r++) {
        for (var c = 0; c < 7; c++) {
            var cell = document.createElement('div');
            cell.className = 'c4-cell';
            if (c4Board[r][c] === 1) cell.classList.add('red');
            else if (c4Board[r][c] === 2) cell.classList.add('yellow');
            cell.dataset.col = c;
            cell.addEventListener('click', function () { c4PlayerMove(parseInt(this.dataset.col)); });
            board.appendChild(cell);
        }
    }
}

function c4PlayerMove(col) {
    if (c4GameOver) return;
    var row = c4Drop(col, 1);
    if (row === -1) return;

    renderC4();
    var win = c4CheckWin(1);
    if (win) {
        c4GameOver = true;
        c4Wins++;
        document.getElementById('c4Wins').textContent = c4Wins;
        document.getElementById('c4Status').innerHTML = '🎉 You win!';
        highlightC4Win(win);
        showFact('c4Fact', 'c4FactText');
        return;
    }
    if (c4Full()) {
        c4GameOver = true;
        document.getElementById('c4Status').textContent = '🤝 It\'s a draw!';
        return;
    }

    document.getElementById('c4Status').textContent = 'AI thinking...';
    setTimeout(function () {
        c4AIMove();
        renderC4();
        var win2 = c4CheckWin(2);
        if (win2) {
            c4GameOver = true;
            c4Losses++;
            document.getElementById('c4Losses').textContent = c4Losses;
            document.getElementById('c4Status').innerHTML = '😢 AI wins!';
            highlightC4Win(win2);
            showFact('c4Fact', 'c4FactText');
            return;
        }
        if (c4Full()) {
            c4GameOver = true;
            document.getElementById('c4Status').textContent = '🤝 It\'s a draw!';
            return;
        }
        document.getElementById('c4Status').innerHTML = 'Your turn! You are 🔴';
    }, 400);
}

function c4Drop(col, player) {
    for (var r = 5; r >= 0; r--) {
        if (c4Board[r][col] === 0) { c4Board[r][col] = player; return r; }
    }
    return -1;
}

function c4Full() {
    for (var c = 0; c < 7; c++) if (c4Board[0][c] === 0) return false;
    return true;
}

function c4CheckWin(player) {
    var dirs = [[0,1],[1,0],[1,1],[1,-1]];
    for (var r = 0; r < 6; r++) {
        for (var c = 0; c < 7; c++) {
            if (c4Board[r][c] !== player) continue;
            for (var d = 0; d < dirs.length; d++) {
                var cells = [[r, c]];
                var ok = true;
                for (var k = 1; k < 4; k++) {
                    var nr = r + dirs[d][0] * k, nc = c + dirs[d][1] * k;
                    if (nr < 0 || nr >= 6 || nc < 0 || nc >= 7 || c4Board[nr][nc] !== player) { ok = false; break; }
                    cells.push([nr, nc]);
                }
                if (ok) return cells;
            }
        }
    }
    return null;
}

function highlightC4Win(cells) {
    var boardEl = document.getElementById('c4Board');
    var allCells = boardEl.querySelectorAll('.c4-cell');
    cells.forEach(function (rc) {
        var idx = rc[0] * 7 + rc[1];
        allCells[idx].classList.add('win-cell');
    });
}

function c4AIMove() {
    var col = -1;
    if (c4Level === 'easy') {
        col = c4EasyMove();
    } else if (c4Level === 'medium') {
        col = Math.random() < 0.6 ? c4SmartMove() : c4EasyMove();
    } else if (c4Level === 'hard') {
        col = Math.random() < 0.85 ? c4SmartMove() : c4EasyMove();
    } else {
        col = c4BestMove();
    }
    if (col >= 0) c4Drop(col, 2);
}

function c4EasyMove() {
    var cols = [];
    for (var c = 0; c < 7; c++) if (c4Board[0][c] === 0) cols.push(c);
    return cols[Math.floor(Math.random() * cols.length)];
}

function c4SmartMove() {
    /* Block wins, take wins, else center preference */
    var b = c4Board;
    for (var c = 0; c < 7; c++) {
        if (b[0][c] !== 0) continue;
        var r = c4DropSim(c, 2);
        if (r >= 0 && c4WinAt(r, c, 2)) { c4UndoSim(r, c); return c; }
        c4UndoSim(r, c);
    }
    for (var c = 0; c < 7; c++) {
        if (b[0][c] !== 0) continue;
        var r = c4DropSim(c, 1);
        if (r >= 0 && c4WinAt(r, c, 1)) { c4UndoSim(r, c); return c; }
        c4UndoSim(r, c);
    }
    if (b[0][3] === 0) return 3;
    return c4EasyMove();
}

function c4BestMove() {
    var bestCol = 3, bestScore = -Infinity;
    for (var c = 0; c < 7; c++) {
        if (c4Board[0][c] !== 0) continue;
        var r = c4DropSim(c, 2);
        var score = c4Evaluate();
        c4UndoSim(r, c);
        /* Prefer center columns */
        score += (3 - Math.abs(c - 3)) * 2;
        if (score > bestScore) { bestScore = score; bestCol = c; }
    }
    return bestCol;
}

function c4DropSim(col, player) {
    for (var r = 5; r >= 0; r--) {
        if (c4Board[r][col] === 0) { c4Board[r][col] = player; return r; }
    }
    return -1;
}

function c4UndoSim(row, col) {
    c4Board[row][col] = 0;
}

function c4WinAt(r, c, player) {
    var dirs = [[0,1],[1,0],[1,1],[1,-1]];
    for (var d = 0; d < dirs.length; d++) {
        var count = 1;
        for (var k = 1; k < 4; k++) {
            var nr = r + dirs[d][0] * k, nc = c + dirs[d][1] * k;
            if (nr >= 0 && nr < 6 && nc >= 0 && nc < 7 && c4Board[nr][nc] === player) count++;
            else break;
        }
        for (var k = 1; k < 4; k++) {
            var nr = r - dirs[d][0] * k, nc = c - dirs[d][1] * k;
            if (nr >= 0 && nr < 6 && nc >= 0 && nc < 7 && c4Board[nr][nc] === player) count++;
            else break;
        }
        if (count >= 4) return true;
    }
    return false;
}

function c4Evaluate() {
    var score = 0;
    /* Check horizontal windows */
    for (var r = 0; r < 6; r++) {
        for (var c = 0; c <= 3; c++) {
            var arr = [c4Board[r][c], c4Board[r][c+1], c4Board[r][c+2], c4Board[r][c+3]];
            score += c4WindowScore(arr);
        }
    }
    /* Vertical */
    for (var c = 0; c < 7; c++) {
        for (var r = 0; r <= 2; r++) {
            var arr = [c4Board[r][c], c4Board[r+1][c], c4Board[r+2][c], c4Board[r+3][c]];
            score += c4WindowScore(arr);
        }
    }
    /* Diagonal */
    for (var r = 0; r <= 2; r++) {
        for (var c = 0; c <= 3; c++) {
            var arr = [c4Board[r][c], c4Board[r+1][c+1], c4Board[r+2][c+2], c4Board[r+3][c+3]];
            score += c4WindowScore(arr);
        }
    }
    for (var r = 0; r <= 2; r++) {
        for (var c = 3; c < 7; c++) {
            var arr = [c4Board[r][c], c4Board[r+1][c-1], c4Board[r+2][c-2], c4Board[r+3][c-3]];
            score += c4WindowScore(arr);
        }
    }
    return score;
}

function c4WindowScore(arr) {
    var ai = arr.filter(function (v) { return v === 2; }).length;
    var human = arr.filter(function (v) { return v === 1; }).length;
    var empty = arr.filter(function (v) { return v === 0; }).length;
    if (ai === 4) return 100;
    if (ai === 3 && empty === 1) return 10;
    if (ai === 2 && empty === 2) return 3;
    if (human === 3 && empty === 1) return -8;
    return 0;
}

/* ============================================================
   GAME 7: SIMON SAYS
   ============================================================ */
var simSequence = [];
var simPlayerIndex = 0;
var simLevel = 1;
var simBest = 0;
var simRunning = false;
var simLockInput = false;

var SIMON_COLORS = ['simon-green', 'simon-red', 'simon-yellow', 'simon-blue'];
var SIMON_IDS = ['simGreen', 'simRed', 'simYellow', 'simBlue'];

function startSimon() {
    simSequence = [];
    simLevel = 1;
    simRunning = true;
    document.getElementById('simLevel').textContent = '1';
    document.getElementById('simFact').classList.add('hidden');
    document.getElementById('simonCenterText').textContent = 'Watch!';
    nextSimonRound();
}

function nextSimonRound() {
    simLockInput = true;
    simPlayerIndex = 0;
    simSequence.push(Math.floor(Math.random() * 4));
    document.getElementById('simStatus').textContent = 'Level ' + simLevel + ' — Watch carefully!';
    document.getElementById('simonCenterText').textContent = 'Watch!';

    var i = 0;
    var interval = setInterval(function () {
        if (i > 0) SimonOff(simSequence[i - 1]);
        if (i >= simSequence.length) {
            clearInterval(interval);
            simLockInput = false;
            document.getElementById('simStatus').textContent = 'Your turn!';
            document.getElementById('simonCenterText').textContent = 'Your turn!';
            return;
        }
        SimonOn(simSequence[i]);
        i++;
    }, 600);
}

function SimonOn(idx) {
    var el = document.getElementById(SIMON_IDS[idx]);
    el.classList.add('lit');
}

function SimonOff(idx) {
    var el = document.getElementById(SIMON_IDS[idx]);
    el.classList.remove('lit');
}

function simonClick(idx) {
    if (!simRunning || simLockInput) return;

    SimonOn(idx);
    setTimeout(function () { SimonOff(idx); }, 200);

    if (idx === simSequence[simPlayerIndex]) {
        simPlayerIndex++;
        if (simPlayerIndex === simSequence.length) {
            simLockInput = true;
            simLevel++;
            document.getElementById('simLevel').textContent = simLevel;
            document.getElementById('simStatus').textContent = '✅ Correct!';
            document.getElementById('simonCenterText').textContent = 'Yes!';

            if (simLevel > simBest) {
                simBest = simLevel - 1;
                document.getElementById('simBest').textContent = simBest;
            }

            if (simLevel % 5 === 0) {
                showFact('simFact', 'simFactText');
            }

            setTimeout(nextSimonRound, 1000);
        }
    } else {
        simRunning = false;
        simLockInput = true;
        document.getElementById('simStatus').textContent = '❌ Wrong! You reached level ' + simLevel;
        document.getElementById('simonCenterText').textContent = 'Try again!';
        if (simLevel - 1 > simBest) {
            simBest = simLevel - 1;
            document.getElementById('simBest').textContent = simBest;
        }
        showFact('simFact', 'simFactText');
    }
}

/* ============================================================
   GAME 8: BREAKOUT
   ============================================================ */
var brkCanvas, brkCtx;
var brkBall, brkPaddle, brkBricks;
var brkScore = 0, brkLives = 3;
var brkRunning = false, brkAnimId = null;
var brkDir = { x: 0, y: 0 };
var brkLevel = 'easy';
var BRK_ROWS = 5, BRK_COLS = 8;
var BRK_SPEEDS = { easy: 3, medium: 5, hard: 7 };

function setBreakoutLevel(level) {
    brkLevel = level;
    document.querySelectorAll('#breakout .diff-btn').forEach(function (b) { b.classList.remove('active'); });
    event.target.classList.add('active');
    resetBreakout();
}

function startBreakout() {
    if (!brkCanvas) { brkCanvas = document.getElementById('breakoutCanvas'); brkCtx = brkCanvas.getContext('2d'); }
    if (brkRunning) return;
    brkRunning = true;
    brkScore = 0;
    brkLives = 3;
    document.getElementById('brkScore').textContent = '0';
    document.getElementById('brkLives').textContent = '3';
    document.getElementById('brkStatus').textContent = 'Playing...';
    document.getElementById('brkFact').classList.add('hidden');
    brkBall = { x: brkCanvas.width / 2, y: brkCanvas.height - 30, r: 6 };
    brkPaddle = { x: brkCanvas.width / 2 - 40, w: 80, h: 10 };
    var spd = BRK_SPEEDS[brkLevel] || 4;
    brkDir = { x: spd * (Math.random() < 0.5 ? 1 : -1), y: -spd };
    brkBricks = [];
    for (var r = 0; r < BRK_ROWS; r++) {
        for (var c = 0; c < BRK_COLS; c++) {
            brkBricks.push({ x: 10 + c * 57.5, y: 30 + r * 25, w: 52, h: 20, alive: true, color: ['#FF6B6B','#FFA94D','#FFD43B','#69DB7C','#74C0FC'][r] });
        }
    }
    brkLoop();
}

function resetBreakout() {
    brkRunning = false;
    if (brkAnimId) cancelAnimationFrame(brkAnimId);
    brkScore = 0; brkLives = 3;
    if (!brkCanvas) { brkCanvas = document.getElementById('breakoutCanvas'); brkCtx = brkCanvas.getContext('2d'); }
    brkCtx.clearRect(0, 0, brkCanvas.width, brkCanvas.height);
    document.getElementById('brkScore').textContent = '0';
    document.getElementById('brkLives').textContent = '3';
    document.getElementById('brkStatus').textContent = 'Press Start to play!';
    document.getElementById('brkFact').classList.add('hidden');
}

function breakoutDir(dir) {
    if (!brkRunning || !brkPaddle) return;
    var step = 30;
    if (dir === 'left') brkPaddle.x = Math.max(0, brkPaddle.x - step);
    else brkPaddle.x = Math.min(brkCanvas.width - brkPaddle.w, brkPaddle.x + step);
}

function brkLoop() {
    if (!brkRunning) return;
    brkCtx.clearRect(0, 0, brkCanvas.width, brkCanvas.height);

    /* Bricks */
    brkBricks.forEach(function (b) {
        if (!b.alive) return;
        brkCtx.fillStyle = b.color;
        brkCtx.fillRect(b.x, b.y, b.w, b.h);
        brkCtx.strokeStyle = '#fff';
        brkCtx.lineWidth = 1;
        brkCtx.strokeRect(b.x, b.y, b.w, b.h);
    });

    /* Paddle */
    brkCtx.fillStyle = '#fff';
    brkCtx.fillRect(brkPaddle.x, brkCanvas.height - 20, brkPaddle.w, brkPaddle.h);

    /* Ball */
    brkCtx.fillStyle = '#FFD43B';
    brkCtx.beginPath();
    brkCtx.arc(brkBall.x, brkBall.y, brkBall.r, 0, Math.PI * 2);
    brkCtx.fill();

    /* Move ball */
    brkBall.x += brkDir.x;
    brkBall.y += brkDir.y;

    /* Wall bounce */
    if (brkBall.x - brkBall.r <= 0 || brkBall.x + brkBall.r >= brkCanvas.width) brkDir.x = -brkDir.x;
    if (brkBall.y - brkBall.r <= 0) brkDir.y = -brkDir.y;

    /* Paddle bounce */
    if (brkBall.y + brkBall.r >= brkCanvas.height - 20 && brkBall.x >= brkPaddle.x && brkBall.x <= brkPaddle.x + brkPaddle.w) {
        brkDir.y = -Math.abs(brkDir.y);
        var hit = (brkBall.x - (brkPaddle.x + brkPaddle.w / 2)) / (brkPaddle.w / 2);
        brkDir.x = hit * Math.abs(brkDir.y);
    }

    /* Bottom */
    if (brkBall.y + brkBall.r >= brkCanvas.height) {
        brkLives--;
        document.getElementById('brkLives').textContent = brkLives;
        if (brkLives <= 0) {
            brkRunning = false;
            document.getElementById('brkStatus').textContent = '💀 Game Over! Score: ' + brkScore;
            showFact('brkFact', 'brkFactText');
            return;
        }
        brkBall.x = brkCanvas.width / 2; brkBall.y = brkCanvas.height - 30;
        var spd = BRK_SPEEDS[brkLevel] || 4;
        brkDir = { x: spd * (Math.random() < 0.5 ? 1 : -1), y: -spd };
    }

    /* Brick collision */
    brkBricks.forEach(function (b) {
        if (!b.alive) return;
        if (brkBall.x + brkBall.r > b.x && brkBall.x - brkBall.r < b.x + b.w && brkBall.y + brkBall.r > b.y && brkBall.y - brkBall.r < b.y + b.h) {
            b.alive = false;
            brkDir.y = -brkDir.y;
            brkScore += 10;
            document.getElementById('brkScore').textContent = brkScore;
        }
    });

    /* Win check */
    if (brkBricks.every(function (b) { return !b.alive; })) {
        brkRunning = false;
        document.getElementById('brkStatus').textContent = '🎉 You cleared all bricks! Score: ' + brkScore;
        showFact('brkFact', 'brkFactText');
        return;
    }

    brkAnimId = requestAnimationFrame(brkLoop);
}

/* ============================================================
   GAME 9: PONG
   ============================================================ */
var pongCanvas, pongCtx;
var pongPlayer, pongAIPaddle, pongBall;
var pongPScore = 0, pongAScore = 0;
var pongRunning = false, pongAnimId = null;
var pongDir_ = null;
var pongLevel = 'easy';
var PONG_SPEEDS = { easy: 3, medium: 5, hard: 7 };

function setPongLevel(level) {
    pongLevel = level;
    document.querySelectorAll('#pong .diff-btn').forEach(function (b) { b.classList.remove('active'); });
    event.target.classList.add('active');
    resetPong();
}

function startPong() {
    if (!pongCanvas) { pongCanvas = document.getElementById('pongCanvas'); pongCtx = pongCanvas.getContext('2d'); }
    if (pongRunning) return;
    pongRunning = true;
    pongPScore = 0; pongAScore = 0;
    document.getElementById('pongPlayer').textContent = '0';
    document.getElementById('pongAI').textContent = '0';
    document.getElementById('pongStatus').textContent = 'Playing... First to 7!';
    document.getElementById('pongFact').classList.add('hidden');
    pongPlayer = { y: pongCanvas.height / 2 - 30, h: 60 };
    pongAIPaddle = { y: pongCanvas.height / 2 - 30, h: 60 };
    pongResetBall();
    pongDir_ = null;
    pongLoop();
}

function resetPong() {
    pongRunning = false;
    if (pongAnimId) cancelAnimationFrame(pongAnimId);
    pongPScore = 0; pongAScore = 0;
    if (!pongCanvas) { pongCanvas = document.getElementById('pongCanvas'); pongCtx = pongCanvas.getContext('2d'); }
    pongCtx.clearRect(0, 0, pongCanvas.width, pongCanvas.height);
    document.getElementById('pongPlayer').textContent = '0';
    document.getElementById('pongAI').textContent = '0';
    document.getElementById('pongStatus').textContent = 'Press Start to play!';
    document.getElementById('pongFact').classList.add('hidden');
}

function pongDir(d) { pongDir_ = d; }

function pongResetBall() {
    var spd = PONG_SPEEDS[pongLevel] || 4;
    pongBall = { x: pongCanvas.width / 2, y: pongCanvas.height / 2, vx: spd * (Math.random() < 0.5 ? 1 : -1), vy: spd * (Math.random() < 0.5 ? 1 : -1) };
}

function pongLoop() {
    if (!pongRunning) return;
    var W = pongCanvas.width, H = pongCanvas.height;

    pongCtx.clearRect(0, 0, W, H);

    /* Dashed center line */
    pongCtx.setLineDash([8, 8]);
    pongCtx.strokeStyle = '#555';
    pongCtx.beginPath();
    pongCtx.moveTo(W / 2, 0);
    pongCtx.lineTo(W / 2, H);
    pongCtx.stroke();
    pongCtx.setLineDash([]);

    /* Paddles */
    pongCtx.fillStyle = '#4CAF50';
    pongCtx.fillRect(10, pongPlayer.y, 10, pongPlayer.h);
    pongCtx.fillStyle = '#FF6B6B';
    pongCtx.fillRect(W - 20, pongAIPaddle.y, 10, pongPlayer.h);

    /* Ball */
    pongCtx.fillStyle = '#FFD43B';
    pongCtx.beginPath();
    pongCtx.arc(pongBall.x, pongBall.y, 6, 0, Math.PI * 2);
    pongCtx.fill();

    /* Player movement */
    if (pongDir_ === 'up') pongPlayer.y = Math.max(0, pongPlayer.y - 5);
    else if (pongDir_ === 'down') pongPlayer.y = Math.min(H - pongPlayer.h, pongPlayer.y + 5);
    pongDir_ = null;

    /* AI */
    var aiSpeed = PONG_SPEEDS[pongLevel] * 2;
    var aiCenter = pongAIPaddle.y + pongAIPaddle.h / 2;
    if (aiCenter < pongBall.y - 10) pongAIPaddle.y = Math.min(H - pongAIPaddle.h, pongAIPaddle.y + aiSpeed);
    else if (aiCenter > pongBall.y + 10) pongAIPaddle.y = Math.max(0, pongAIPaddle.y - aiSpeed);

    /* Move ball */
    pongBall.x += pongBall.vx;
    pongBall.y += pongBall.vy;

    /* Top/bottom bounce */
    if (pongBall.y <= 6 || pongBall.y >= H - 6) pongBall.vy = -pongBall.vy;

    /* Player paddle bounce */
    if (pongBall.x <= 20 && pongBall.y >= pongPlayer.y && pongBall.y <= pongPlayer.y + pongPlayer.h) {
        pongBall.vx = Math.abs(pongBall.vx);
    }

    /* AI paddle bounce */
    if (pongBall.x >= W - 20 && pongBall.y >= pongAIPaddle.y && pongBall.y <= pongAIPaddle.y + pongAIPaddle.h) {
        pongBall.vx = -Math.abs(pongBall.vx);
    }

    /* Score */
    if (pongBall.x < 0) {
        pongAScore++;
        document.getElementById('pongAI').textContent = pongAScore;
        if (pongAScore >= 7) {
            pongRunning = false;
            document.getElementById('pongStatus').textContent = '😢 AI wins!';
            showFact('pongFact', 'pongFactText');
            return;
        }
        pongResetBall();
    }
    if (pongBall.x > W) {
        pongPScore++;
        document.getElementById('pongPlayer').textContent = pongPScore;
        if (pongPScore >= 7) {
            pongRunning = false;
            document.getElementById('pongStatus').textContent = '🎉 You win!';
            showFact('pongFact', 'pongFactText');
            return;
        }
        pongResetBall();
    }

    /* Scores on canvas */
    pongCtx.fillStyle = '#fff';
    pongCtx.font = '32px Fredoka';
    pongCtx.textAlign = 'center';
    pongCtx.fillText(pongPScore, W / 4, 40);
    pongCtx.fillText(pongAScore, W * 3 / 4, 40);

    pongAnimId = requestAnimationFrame(pongLoop);
}

/* ============================================================
   GAME 10: SPACE INVADERS
   ============================================================ */
var spCanvas, spCtx;
var spPlayer, spBullets, spEnemies, spEnemyDir;
var spScore = 0, spLives = 3;
var spRunning = false, spAnimId = null;
var spLevel = 'easy';
var SP_INTERVALS = { easy: 80, medium: 50, hard: 30 };

function setSpaceLevel(level) {
    spLevel = level;
    document.querySelectorAll('#spaceinv .diff-btn').forEach(function (b) { b.classList.remove('active'); });
    event.target.classList.add('active');
    resetSpace();
}

function startSpace() {
    if (!spCanvas) { spCanvas = document.getElementById('spaceCanvas'); spCtx = spCanvas.getContext('2d'); }
    if (spRunning) return;
    spRunning = true;
    spScore = 0; spLives = 3;
    document.getElementById('spaceScore').textContent = '0';
    document.getElementById('spaceLives').textContent = '3';
    document.getElementById('spaceStatus').textContent = 'Playing...';
    document.getElementById('spaceFact').classList.add('hidden');
    spPlayer = { x: spCanvas.width / 2 - 15, w: 30 };
    spBullets = [];
    spEnemies = [];
    spEnemyDir = 1;
    for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 8; c++) {
            spEnemies.push({ x: 50 + c * 50, y: 30 + r * 35, w: 30, h: 25, alive: true });
        }
    }
    spLoop();
}

function resetSpace() {
    spRunning = false;
    if (spAnimId) cancelAnimationFrame(spAnimId);
    spScore = 0; spLives = 3;
    if (!spCanvas) { spCanvas = document.getElementById('spaceCanvas'); spCtx = spCanvas.getContext('2d'); }
    spCtx.clearRect(0, 0, spCanvas.width, spCanvas.height);
    document.getElementById('spaceScore').textContent = '0';
    document.getElementById('spaceLives').textContent = '3';
    document.getElementById('spaceStatus').textContent = 'Press Start to play!';
    document.getElementById('spaceFact').classList.add('hidden');
}

function spaceDir(d) {
    if (!spRunning || !spPlayer) return;
    var step = 20;
    if (d === 'left') spPlayer.x = Math.max(0, spPlayer.x - step);
    else spPlayer.x = Math.min(spCanvas.width - spPlayer.w, spPlayer.x + step);
}

function spaceShoot() {
    if (!spRunning || !spPlayer) return;
    spBullets.push({ x: spPlayer.x + spPlayer.w / 2, y: spCanvas.height - 40 });
}

function spLoop() {
    if (!spRunning) return;
    var W = spCanvas.width, H = spCanvas.height;
    spCtx.clearRect(0, 0, W, H);

    /* Player ship */
    spCtx.fillStyle = '#4CAF50';
    spCtx.beginPath();
    spCtx.moveTo(spPlayer.x + spPlayer.w / 2, spCanvas.height - 30);
    spCtx.lineTo(spPlayer.x, spCanvas.height - 10);
    spCtx.lineTo(spPlayer.x + spPlayer.w, spCanvas.height - 10);
    spCtx.fill();

    /* Bullets */
    spCtx.fillStyle = '#FFD43B';
    spBullets.forEach(function (b) {
        b.y -= 6;
        spCtx.fillRect(b.x - 2, b.y, 4, 10);
    });
    spBullets = spBullets.filter(function (b) { return b.y > 0; });

    /* Enemies */
    var moveDown = false;
    spEnemies.forEach(function (e) {
        if (!e.alive) return;
        if (e.x + e.w >= W - 10 || e.x <= 10) moveDown = true;
    });

    spEnemies.forEach(function (e) {
        if (!e.alive) return;
        e.x += spEnemyDir * 1.5;
        if (moveDown) e.y += 15;
        spCtx.fillStyle = '#FF6B6B';
        spCtx.fillRect(e.x, e.y, e.w, e.h);
        spCtx.fillStyle = '#fff';
        spCtx.font = '14px sans-serif';
        spCtx.textAlign = 'center';
        spCtx.fillText('👾', e.x + e.w / 2, e.y + e.h - 5);
    });

    if (moveDown) spEnemyDir *= -1;

    /* Bullet-enemy collision */
    spBullets.forEach(function (b) {
        spEnemies.forEach(function (e) {
            if (!e.alive) return;
            if (b.x > e.x && b.x < e.x + e.w && b.y > e.y && b.y < e.y + e.h) {
                e.alive = false;
                b.y = -100;
                spScore += 10;
                document.getElementById('spaceScore').textContent = spScore;
            }
        });
    });

    /* Enemy-player collision */
    spEnemies.forEach(function (e) {
        if (!e.alive) return;
        if (e.y + e.h >= H - 30) {
            spRunning = false;
            document.getElementById('spaceStatus').textContent = '💀 Game Over! Score: ' + spScore;
            showFact('spaceFact', 'spaceFactText');
        }
    });

    /* Win check */
    if (spEnemies.every(function (e) { return !e.alive; })) {
        spRunning = false;
        document.getElementById('spaceStatus').textContent = '🎉 You win! Score: ' + spScore;
        showFact('spaceFact', 'spaceFactText');
        return;
    }

    if (spLives <= 0 || !spRunning) return;
    spAnimId = requestAnimationFrame(spLoop);
}

/* ============================================================
   GAME 11: FLAPPY BIRD
   ============================================================ */
var flapCanvas, flapCtx;
var flapBird, flapPipes, flapScore, flapBest = 0;
var flapRunning = false, flapAnimId = null;
var flapGravity = 0.4;
var flapJump = -6;
var flapGap = 140;
var flapFrame = 0;

function startFlappy() {
    if (!flapCanvas) { flapCanvas = document.getElementById('flapCanvas'); flapCtx = flapCanvas.getContext('2d'); }
    if (flapRunning) return;
    flapRunning = true;
    flapScore = 0;
    flapBird = { y: flapCanvas.height / 2, vy: 0 };
    flapPipes = [];
    flapFrame = 0;
    document.getElementById('flapScore').textContent = '0';
    document.getElementById('flapStatus').textContent = 'Playing... Tap to fly!';
    document.getElementById('flapFact').classList.add('hidden');
    flapLoop();
}

function resetFlappy() {
    flapRunning = false;
    if (flapAnimId) cancelAnimationFrame(flapAnimId);
    flapScore = 0;
    if (!flapCanvas) { flapCanvas = document.getElementById('flapCanvas'); flapCtx = flapCanvas.getContext('2d'); }
    flapCtx.clearRect(0, 0, flapCanvas.width, flapCanvas.height);
    document.getElementById('flapScore').textContent = '0';
    document.getElementById('flapStatus').textContent = 'Press Start to play!';
    document.getElementById('flapFact').classList.add('hidden');
}

function flapTap() {
    if (!flapRunning || !flapBird) return;
    flapBird.vy = flapJump;
}

function flapLoop() {
    if (!flapRunning) return;
    var W = flapCanvas.width, H = flapCanvas.height;
    flapCtx.clearRect(0, 0, W, H);

    /* Background */
    flapCtx.fillStyle = '#87CEEB';
    flapCtx.fillRect(0, 0, W, H);

    /* Pipes */
    flapFrame++;
    if (flapFrame % 90 === 0) {
        var topH = 50 + Math.random() * (H - flapGap - 100);
        flapPipes.push({ x: W, topH: topH });
    }

    flapPipes.forEach(function (p) {
        p.x -= 2;
        flapCtx.fillStyle = '#4CAF50';
        flapCtx.fillRect(p.x, 0, 40, p.topH);
        flapCtx.fillRect(p.x, p.topH + flapGap, 40, H - p.topH - flapGap);
    });
    flapPipes = flapPipes.filter(function (p) { return p.x > -50; });

    /* Bird physics */
    flapBird.vy += flapGravity;
    flapBird.y += flapBird.vy;

    /* Draw bird */
    flapCtx.fillStyle = '#FFD43B';
    flapCtx.beginPath();
    flappyDrawBird(flapCtx, 60, flapBird.y);

    /* Pipe collision */
    flapPipes.forEach(function (p) {
        if (60 + 15 > p.x && 60 - 15 < p.x + 40) {
            if (flapBird.y - 15 < p.topH || flapBird.y + 15 > p.topH + flapGap) {
                flapDie();
            }
        }
        if (p.x + 40 < 60 && !p.scored) {
            p.scored = true;
            flapScore++;
            document.getElementById('flapScore').textContent = flapScore;
        }
    });

    /* Ground / ceiling */
    if (flapBird.y > H - 15 || flapBird.y < 0) flapDie();

    if (!flapRunning) return;
    flapAnimId = requestAnimationFrame(flapLoop);
}

function flappyDrawBird(ctx, x, y) {
    ctx.fillStyle = '#FFD43B';
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(x + 6, y - 4, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FF6B35';
    ctx.beginPath();
    ctx.moveTo(x + 15, y);
    ctx.lineTo(x + 25, y + 2);
    ctx.lineTo(x + 15, y + 5);
    ctx.fill();
}

function flapDie() {
    flapRunning = false;
    if (flapScore > flapBest) { flapBest = flapScore; document.getElementById('flapBest').textContent = flapBest; }
    document.getElementById('flapStatus').textContent = '💀 Game Over! Score: ' + flapScore;
    showFact('flapFact', 'flapFactText');
}

/* ============================================================
   GAME 12: REACTION TIME
   ============================================================ */
var reactState = 'idle';
var reactTimeout = null;
var reactStart = 0;
var reactTries = 0;
var reactBest = Infinity;

function startReaction() {
    reactState = 'waiting';
    reactTries = 0;
    document.getElementById('reactTries').textContent = '0';
    document.getElementById('reactBest').textContent = '---';
    document.getElementById('reactStatus').textContent = 'Wait for green...';
    document.getElementById('reactText').textContent = 'Wait...';
    document.getElementById('reactZone').style.background = '#555';
    document.getElementById('reactFact').classList.add('hidden');
    reactTimeout = setTimeout(function () {
        reactState = 'ready';
        reactStart = Date.now();
        document.getElementById('reactText').textContent = 'CLICK NOW!';
        document.getElementById('reactZone').style.background = '#4CAF50';
    }, 1000 + Math.random() * 4000);
}

function reactClick() {
    if (reactState === 'waiting') {
        clearTimeout(reactTimeout);
        reactState = 'idle';
        document.getElementById('reactText').textContent = 'Too early! Press Start to try again.';
        document.getElementById('reactZone').style.background = '#FF6B6B';
        document.getElementById('reactStatus').textContent = 'Too early! Click when green.';
    } else if (reactState === 'ready') {
        var time = Date.now() - reactStart;
        reactTries++;
        document.getElementById('reactTries').textContent = reactTries;
        reactState = 'idle';
        document.getElementById('reactText').textContent = time + 'ms!';
        document.getElementById('reactZone').style.background = '#333';
        document.getElementById('reactStatus').textContent = 'Your reaction: ' + time + 'ms';
        if (time < reactBest) {
            reactBest = time;
            document.getElementById('reactBest').textContent = reactBest + 'ms';
        }
        if (reactBest <= 300) {
            showFact('reactFact', 'reactFactText');
        }
    }
}

/* ============================================================
   GAME 13: WORD SCRAMBLE
   ============================================================ */
var wsWords = ['ROBOT','LEARN','SMART','CODE','BRAIN','DATA','PIXEL','LOGIC','QUERY','VIRUS','ALERT','FORTH','BELOW','AGAIN','CHAIN','FLOAT','PARSE','STACK','STORE','CATCH'];
var wsCurrent = '';
var wsScore = 0, wsTime = 30, wsTimer = null;

function startWordScramble() {
    wsScore = 0; wsTime = 30;
    document.getElementById('wsScore').textContent = '0';
    document.getElementById('wsTime').textContent = '30s';
    document.getElementById('wsStatus').textContent = 'Unscramble the word!';
    document.getElementById('wsFact').classList.add('hidden');
    document.getElementById('wsInput').value = '';
    document.getElementById('wsInput').disabled = false;
    document.getElementById('wsInput').focus();
    nextWord();
    clearInterval(wsTimer);
    wsTimer = setInterval(function () {
        wsTime--;
        document.getElementById('wsTime').textContent = wsTime + 's';
        if (wsTime <= 0) {
            clearInterval(wsTimer);
            document.getElementById('wsStatus').textContent = '⏰ Time\'s up! Score: ' + wsScore;
            document.getElementById('wsInput').disabled = true;
            if (wsScore >= 5) showFact('wsFact', 'wsFactText');
        }
    }, 1000);
}

function nextWord() {
    wsCurrent = wsWords[Math.floor(Math.random() * wsWords.length)];
    var scrambled = wsCurrent.split('');
    for (var i = scrambled.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = scrambled[i]; scrambled[i] = scrambled[j]; scrambled[j] = tmp;
    }
    document.getElementById('wsScrambled').textContent = scrambled.join('');
    document.getElementById('wsInput').value = '';
}

function checkWord() {
    if (wsTime <= 0) return;
    var guess = document.getElementById('wsInput').value.toUpperCase().trim();
    if (guess === wsCurrent) {
        wsScore += 5;
        document.getElementById('wsScore').textContent = wsScore;
        document.getElementById('wsStatus').textContent = '✅ Correct! +' + 5 + ' points!';
        nextWord();
    } else {
        document.getElementById('wsStatus').textContent = '❌ Try again!';
    }
}

function skipWord() {
    if (wsTime <= 0) return;
    document.getElementById('wsStatus').textContent = 'Skipped! The word was: ' + wsCurrent;
    nextWord();
}

/* ============================================================
   GAME 14: NUMBER GUESS
   ============================================================ */
var ngTarget = 0, ngGuesses = 0, ngWins = 0;
var ngMax = 50;
var ngActive = false;

function setGuessLevel(level) {
    document.querySelectorAll('#numguess .diff-btn').forEach(function (b) { b.classList.remove('active'); });
    event.target.classList.add('active');
    if (level === 'easy') ngMax = 50;
    else if (level === 'medium') ngMax = 100;
    else ngMax = 500;
    startNumberGuess();
}

function startNumberGuess() {
    ngTarget = Math.floor(Math.random() * ngMax) + 1;
    ngGuesses = 0;
    ngActive = true;
    document.getElementById('ngGuesses').textContent = '0';
    document.getElementById('ngDisplay').textContent = '?';
    document.getElementById('ngHint').textContent = 'I\'m thinking of a number between 1 and ' + ngMax + '...';
    document.getElementById('ngStatus').textContent = 'Make your guess!';
    document.getElementById('ngInput').value = '';
    document.getElementById('ngInput').disabled = false;
    document.getElementById('ngInput').focus();
    document.getElementById('ngFact').classList.add('hidden');
}

function guessNumber() {
    if (!ngActive) return;
    var val = parseInt(document.getElementById('ngInput').value);
    if (isNaN(val) || val < 1 || val > ngMax) {
        document.getElementById('ngHint').textContent = 'Enter a number between 1 and ' + ngMax;
        return;
    }
    ngGuesses++;
    document.getElementById('ngGuesses').textContent = ngGuesses;
    document.getElementById('ngDisplay').textContent = val;

    if (val === ngTarget) {
        ngWins++;
        document.getElementById('ngWins').textContent = ngWins;
        ngActive = false;
        document.getElementById('ngStatus').textContent = '🎉 Correct! It was ' + ngTarget + ' in ' + ngGuesses + ' guesses!';
        document.getElementById('ngHint').textContent = 'Amazing!';
        document.getElementById('ngInput').disabled = true;
        showFact('ngFact', 'ngFactText');
    } else if (val < ngTarget) {
        document.getElementById('ngHint').textContent = '📈 Too low! Try higher.';
    } else {
        document.getElementById('ngHint').textContent = '📉 Too high! Try lower.';
    }
    document.getElementById('ngInput').value = '';
}

/* ============================================================
   GAME 15: ROCK PAPER SCISSORS
   ============================================================ */
var rpsWins = 0, rpsLosses = 0, rpsDraws = 0;
var RPS_EMOJI = { rock: '🪨', paper: '📄', scissors: '✂️' };

function rpsPlay(choice) {
    var choices = ['rock', 'paper', 'scissors'];
    var ai = choices[Math.floor(Math.random() * 3)];
    document.getElementById('rpsPlayerChoice').textContent = RPS_EMOJI[choice];
    document.getElementById('rpsAIChoice').textContent = RPS_EMOJI[ai];

    var result = '';
    if (choice === ai) {
        rpsDraws++;
        result = '🤝 It\'s a draw!';
    } else if ((choice === 'rock' && ai === 'scissors') || (choice === 'paper' && ai === 'rock') || (choice === 'scissors' && ai === 'paper')) {
        rpsWins++;
        result = '🎉 You win! ' + choice.charAt(0).toUpperCase() + choice.slice(1) + ' beats ' + ai + '!';
    } else {
        rpsLosses++;
        result = '😢 AI wins! ' + ai.charAt(0).toUpperCase() + ai.slice(1) + ' beats ' + choice + '!';
    }

    document.getElementById('rpsWins').textContent = rpsWins;
    document.getElementById('rpsLosses').textContent = rpsLosses;
    document.getElementById('rpsDraws').textContent = rpsDraws;
    document.getElementById('rpsStatus').textContent = result;

    if (rpsWins >= 3) {
        showFact('rpsFact', 'rpsFactText');
    }
}

/* ============================================================
   GAME 16: MAZE RUNNER
   ============================================================ */
var mazeCanvas, mazeCtx;
var mazeGrid = [], mazeW, mazeH;
var mazePlayer = { x: 0, y: 0 };
var mazeEnd = { x: 0, y: 0 };
var mazeCellSize;
var mazeTimer = null, mazeSeconds = 0;
var mazeBest = Infinity;
var mazeLevel = 'easy';
var mazeActive = false;
var MAZE_SIZES = { easy: 8, medium: 12, hard: 16 };

function setMazeLevel(level) {
    mazeLevel = level;
    document.querySelectorAll('#maze .diff-btn').forEach(function (b) { b.classList.remove('active'); });
    event.target.classList.add('active');
    resetMaze();
}

function startMaze() {
    if (!mazeCanvas) { mazeCanvas = document.getElementById('mazeCanvas'); mazeCtx = mazeCanvas.getContext('2d'); }
    mazeActive = true;
    mazeSeconds = 0;
    clearInterval(mazeTimer);
    mazeTimer = setInterval(function () {
        mazeSeconds++;
        document.getElementById('mazeTime').textContent = mazeSeconds + 's';
    }, 1000);

    var size = MAZE_SIZES[mazeLevel] || 8;
    mazeW = size; mazeH = size;
    mazeCellSize = Math.floor(Math.min(mazeCanvas.width, mazeCanvas.height) / size);

    /* Generate maze with DFS */
    mazeGrid = [];
    for (var r = 0; r < mazeH; r++) {
        mazeGrid[r] = [];
        for (var c = 0; c < mazeW; c++) {
            mazeGrid[r][c] = { visited: false, walls: { top: true, right: true, bottom: true, left: true } };
        }
    }

    var stack = [];
    var cr = 0, cc = 0;
    mazeGrid[0][0].visited = true;
    stack.push([0, 0]);

    while (stack.length > 0) {
        var neighbors = [];
        var dirs = [[-1, 0, 'top', 'bottom'], [0, 1, 'right', 'left'], [1, 0, 'bottom', 'top'], [0, -1, 'left', 'right']];
        dirs.forEach(function (d) {
            var nr = cr + d[0], nc = cc + d[1];
            if (nr >= 0 && nr < mazeH && nc >= 0 && nc < mazeW && !mazeGrid[nr][nc].visited) {
                neighbors.push([nr, nc, d[2], d[3]]);
            }
        });

        if (neighbors.length > 0) {
            var next = neighbors[Math.floor(Math.random() * neighbors.length)];
            mazeGrid[cr][cc].walls[next[2]] = false;
            mazeGrid[next[0]][next[1]].walls[next[3]] = false;
            mazeGrid[next[0]][next[1]].visited = true;
            stack.push([cr, cc]);
            cr = next[0]; cc = next[1];
        } else {
            var prev = stack.pop();
            cr = prev[0]; cc = prev[1];
        }
    }

    mazePlayer = { x: 0, y: 0 };
    mazeEnd = { x: mazeW - 1, y: mazeH - 1 };
    document.getElementById('mazeStatus').textContent = 'Navigate to the exit!';
    document.getElementById('mazeFact').classList.add('hidden');
    drawMaze();
}

function resetMaze() {
    clearInterval(mazeTimer);
    mazeActive = false;
    if (!mazeCanvas) { mazeCanvas = document.getElementById('mazeCanvas'); mazeCtx = mazeCanvas.getContext('2d'); }
    mazeCtx.clearRect(0, 0, mazeCanvas.width, mazeCanvas.height);
    document.getElementById('mazeTime').textContent = '0s';
    document.getElementById('mazeStatus').textContent = 'Press Start to play!';
    document.getElementById('mazeFact').classList.add('hidden');
}

function mazeDir(dir) {
    if (!mazeActive) return;
    var r = mazePlayer.y, c = mazePlayer.x;
    var cell = mazeGrid[r][c];

    if (dir === 'up' && !cell.walls.top && r > 0) mazePlayer.y--;
    else if (dir === 'down' && !cell.walls.bottom && r < mazeH - 1) mazePlayer.y++;
    else if (dir === 'left' && !cell.walls.left && c > 0) mazePlayer.x--;
    else if (dir === 'right' && !cell.walls.right && c < mazeW - 1) mazePlayer.x++;

    drawMaze();

    if (mazePlayer.x === mazeEnd.x && mazePlayer.y === mazeEnd.y) {
        clearInterval(mazeTimer);
        mazeActive = false;
        document.getElementById('mazeStatus').textContent = '🎉 You escaped in ' + mazeSeconds + 's!';
        if (mazeSeconds < mazeBest) {
            mazeBest = mazeSeconds;
            document.getElementById('mazeBest').textContent = mazeBest + 's';
        }
        showFact('mazeFact', 'mazeFactText');
    }
}

function drawMaze() {
    mazeCtx.clearRect(0, 0, mazeCanvas.width, mazeCanvas.height);
    var cs = mazeCellSize;

    /* Exit */
    mazeCtx.fillStyle = '#4CAF50';
    mazeCtx.fillRect(mazeEnd.x * cs + 2, mazeEnd.y * cs + 2, cs - 4, cs - 4);

    /* Player */
    mazeCtx.fillStyle = '#FFD43B';
    mazeCtx.beginPath();
    mazeCtx.arc(mazePlayer.x * cs + cs / 2, mazePlayer.y * cs + cs / 2, cs / 3, 0, Math.PI * 2);
    mazeCtx.fill();

    /* Walls */
    mazeCtx.strokeStyle = '#aaa';
    mazeCtx.lineWidth = 2;
    for (var r = 0; r < mazeH; r++) {
        for (var c = 0; c < mazeW; c++) {
            var cell = mazeGrid[r][c];
            var x = c * cs, y = r * cs;
            if (cell.walls.top) { mazeCtx.beginPath(); mazeCtx.moveTo(x, y); mazeCtx.lineTo(x + cs, y); mazeCtx.stroke(); }
            if (cell.walls.right) { mazeCtx.beginPath(); mazeCtx.moveTo(x + cs, y); mazeCtx.lineTo(x + cs, y + cs); mazeCtx.stroke(); }
            if (cell.walls.bottom) { mazeCtx.beginPath(); mazeCtx.moveTo(x, y + cs); mazeCtx.lineTo(x + cs, y + cs); mazeCtx.stroke(); }
            if (cell.walls.left) { mazeCtx.beginPath(); mazeCtx.moveTo(x, y); mazeCtx.lineTo(x, y + cs); mazeCtx.stroke(); }
        }
    }
}

/* Maze keyboard */
document.addEventListener('keydown', function (e) {
    var section = document.getElementById('maze');
    if (!section || !section.classList.contains('active')) return;
    var map = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right' };
    if (map[e.key]) { e.preventDefault(); mazeDir(map[e.key]); }
});

/* ============================================================
   GAME 17: TYPING SPEED
   ============================================================ */
var typeWords = ['robot','algorithm','neural','computer','system','binary','coding','network','program','machine','internet','digital','data','function','variable','keyboard','monitor','software','hardware','download'];
var typeCurrent = '';
var typeScore = 0, typeTime = 30, typeTimer = null;
var typeStart = 0;

function startTyping() {
    typeScore = 0; typeTime = 30;
    typeStart = Date.now();
    document.getElementById('typeCorrect').textContent = '0';
    document.getElementById('typeWPM').textContent = '0';
    document.getElementById('typeTime').textContent = '30s';
    document.getElementById('typeStatus').textContent = 'Type the word and press Enter!';
    document.getElementById('typeFact').classList.add('hidden');
    document.getElementById('typeInput').disabled = false;
    document.getElementById('typeInput').focus();
    nextTypeWord();
    clearInterval(typeTimer);
    typeTimer = setInterval(function () {
        typeTime--;
        document.getElementById('typeTime').textContent = typeTime + 's';
        var elapsed = (Date.now() - typeStart) / 1000 / 60;
        var wpm = elapsed > 0 ? Math.round(typeScore / elapsed) : 0;
        document.getElementById('typeWPM').textContent = wpm;
        if (typeTime <= 0) {
            clearInterval(typeTimer);
            document.getElementById('typeStatus').textContent = '⏰ Time\'s up! WPM: ' + wpm;
            document.getElementById('typeInput').disabled = true;
            if (wpm >= 20) showFact('typeFact', 'typeFactText');
        }
    }, 1000);
}

function nextTypeWord() {
    typeCurrent = typeWords[Math.floor(Math.random() * typeWords.length)];
    document.getElementById('typeDisplay').textContent = typeCurrent;
    document.getElementById('typeInput').value = '';
}

function typeCheck() {
    var val = document.getElementById('typeInput').value.trim();
    if (val === typeCurrent) {
        typeScore++;
        document.getElementById('typeCorrect').textContent = typeScore;
        nextTypeWord();
    }
}

function typeNext() {
    typeCheck();
}

/* ============================================================
   COLOR THEME SWITCHER
   ============================================================ */
var colorThemes = ['default','ocean','forest','sunset','neon','candy','galaxy','midnight'];
var colorIndex = 0;

function initColorTheme() {
    var btn = document.getElementById('colorThemeBtn');
    var saved = localStorage.getItem('colorTheme');
    if (saved) {
        colorIndex = colorThemes.indexOf(saved);
        if (colorIndex < 0) colorIndex = 0;
        document.body.setAttribute('data-color', colorThemes[colorIndex]);
    }
    if (btn) {
        btn.addEventListener('click', function () {
            colorIndex = (colorIndex + 1) % colorThemes.length;
            document.body.setAttribute('data-color', colorThemes[colorIndex]);
            localStorage.setItem('colorTheme', colorThemes[colorIndex]);
        });
    }
}

/* ============================================================
   PIXEL ART REACTION CANVAS (emoji particle bursts)
   ============================================================ */
var pixelCanvas, pixelCtx;
var pixelParticles = [];

function initPixelCanvas() {
    pixelCanvas = document.getElementById('pixelCanvas');
    if (!pixelCanvas) return;
    pixelCtx = pixelCanvas.getContext('2d');
    pixelCanvas.width = window.innerWidth;
    pixelCanvas.height = window.innerHeight;
    window.addEventListener('resize', function () {
        pixelCanvas.width = window.innerWidth;
        pixelCanvas.height = window.innerHeight;
    });
    document.addEventListener('click', function (e) {
        var emojis = ['⭐','✨','🔥','💜','🎮','🚀','🤖','💡','🧠','⚡'];
        for (var i = 0; i < 6; i++) {
            pixelParticles.push({
                x: e.clientX,
                y: e.clientY,
                vx: (Math.random() - 0.5) * 6,
                vy: (Math.random() - 0.5) * 6 - 2,
                life: 1,
                emoji: emojis[Math.floor(Math.random() * emojis.length)],
                size: 12 + Math.random() * 8
            });
        }
    });
    pixelLoop();
}

function pixelLoop() {
    if (!pixelCtx) return;
    pixelCtx.clearRect(0, 0, pixelCanvas.width, pixelCanvas.height);
    pixelParticles.forEach(function (p) {
        pixelCtx.globalAlpha = p.life;
        pixelCtx.font = p.size + 'px sans-serif';
        pixelCtx.fillText(p.emoji, p.x, p.y);
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.1;
        p.life -= 0.02;
    });
    pixelCtx.globalAlpha = 1;
    pixelParticles = pixelParticles.filter(function (p) { return p.life > 0; });
    requestAnimationFrame(pixelLoop);
}
