/* ============================================================
   Gamification - Points, Badges, Themes
   ============================================================ */

const POINTS = {
    LESSON_COMPLETE: 10,
    GAME_COMPLETE: 5,
    GAME_PERFECT: 15,
    QUIZ_CORRECT: 2,
    FINAL_TEST_PASS: 50,
    DAILY_LOGIN: 5
};

const BADGES = [
    { id: 'first-lesson', name: 'First Steps', icon: 'smart_toy', desc: 'Complete your first lesson', condition: s => s.lessonsCompleted >= 1 },
    { id: 'five-lessons', name: 'Learner', icon: 'menu_book', desc: 'Complete 5 lessons', condition: s => s.lessonsCompleted >= 5 },
    { id: 'all-lessons', name: 'Scholar', icon: 'school', desc: 'Complete all 18 lessons', condition: s => s.lessonsCompleted >= 18 },
    { id: 'first-game', name: 'Player One', icon: 'sports_esports', desc: 'Play your first game', condition: s => s.gamesPlayed >= 1 },
    { id: 'five-games', name: 'Gamer', icon: 'videogame_asset', desc: 'Play 5 different games', condition: s => s.gamesPlayed >= 5 },
    { id: 'all-games', name: 'Game Master', icon: 'emoji_events', desc: 'Play all 18 games', condition: s => s.gamesPlayed >= 18 },
    { id: 'perfect-game', name: 'Perfectionist', icon: 'check_circle', desc: 'Get 100% on any game', condition: s => s.perfectGames >= 1 },
    { id: 'three-perfect', name: 'Flawless', icon: 'star', desc: 'Get 100% on 3 games', condition: s => s.perfectGames >= 3 },
    { id: 'quiz-whiz', name: 'Quiz Whiz', icon: 'psychology', desc: 'Answer 20 quiz questions correctly', condition: s => s.correctAnswers >= 20 },
    { id: 'quiz-master', name: 'Quiz Master', icon: 'quiz', desc: 'Answer 50 quiz questions correctly', condition: s => s.correctAnswers >= 50 },
    { id: 'point-50', name: 'Rising Star', icon: 'star', desc: 'Earn 50 points', condition: s => s.totalPoints >= 50 },
    { id: 'point-100', name: 'Point Hunter', icon: 'gps_fixed', desc: 'Earn 100 points', condition: s => s.totalPoints >= 100 },
    { id: 'point-250', name: 'High Scorer', icon: 'local_fire_department', desc: 'Earn 250 points', condition: s => s.totalPoints >= 250 },
    { id: 'point-500', name: 'Point Legend', icon: 'workspace_premium', desc: 'Earn 500 points', condition: s => s.totalPoints >= 500 },
    { id: 'final-test', name: 'Test Champion', icon: 'emoji_events', desc: 'Pass the Final Test', condition: s => s.finalTestPassed },
    { id: 'final-perfect', name: 'AI Genius', icon: 'diamond', desc: 'Get 100% on the Final Test', condition: s => s.finalTestPerfect },
    { id: 'streak-3', name: 'On Fire', icon: 'local_fire_department', desc: 'Complete 3 activities in a row', condition: s => s.maxStreak >= 3 },
    { id: 'streak-7', name: 'Unstoppable', icon: 'bolt', desc: 'Complete 7 activities in a row', condition: s => s.maxStreak >= 7 },
    { id: 'beginner-done', name: 'Beginner Clear', icon: 'grass', desc: 'Complete all 6 beginner lessons', condition: s => s.beginnerLessons >= 6 },
    { id: 'medium-done', name: 'Intermediate Clear', icon: 'park', desc: 'Complete all 6 medium lessons', condition: s => s.mediumLessons >= 6 },
    { id: 'hard-done', name: 'Hard Core', icon: 'forest', desc: 'Complete all 6 hard lessons', condition: s => s.hardLessons >= 6 }
];

const THEMES = [
    { id: 'warm', name: 'Warm Sunset', icon: 'wb_sunny', primary: '#FF6B35', secondary: '#FFB627', bg: '#FFF5EB', text: '#3D2B1F' },
    { id: 'ocean', name: 'Ocean Blue', icon: 'water', primary: '#0077B6', secondary: '#00B4D8', bg: '#E8F4FD', text: '#1B263B' },
    { id: 'forest', name: 'Forest Green', icon: 'forest', primary: '#2D6A4F', secondary: '#52B788', bg: '#E8F5E9', text: '#1B4332' },
    { id: 'galaxy', name: 'Galaxy Purple', icon: 'night_sky', primary: '#7B2CBF', secondary: '#C77DFF', bg: '#F3E8FF', text: '#240046' },
    { id: 'candy', name: 'Candy Pink', icon: 'local_candy', primary: '#E91E8C', secondary: '#FF69B4', bg: '#FFF0F7', text: '#6B0038' }
];

function materialIcon(name, style) {
    const s = style || 'font-size:inherit;vertical-align:middle';
    return `<span class="material-symbols-outlined" style="${s}">${name}</span>`;
}

function getGameStats() {
    const defaults = {
        totalPoints: 0,
        lessonsCompleted: 0,
        gamesPlayed: 0,
        perfectGames: 0,
        correctAnswers: 0,
        finalTestPassed: false,
        finalTestPerfect: false,
        streak: 0,
        maxStreak: 0,
        beginnerLessons: 0,
        mediumLessons: 0,
        hardLessons: 0,
        completedLessons: [],
        completedGames: [],
        unlockedBadges: [],
        currentTheme: 'warm',
        lastLogin: null
    };
    try {
        const saved = JSON.parse(localStorage.getItem('gameStats'));
        return saved ? { ...defaults, ...saved } : defaults;
    } catch {
        return defaults;
    }
}

function saveGameStats(stats) {
    localStorage.setItem('gameStats', JSON.stringify(stats));
}

function addPoints(amount) {
    const stats = getGameStats();
    stats.totalPoints += amount;
    saveGameStats(stats);
    updatePointsDisplay();
    checkBadges();
    return stats.totalPoints;
}

function markLessonComplete(lessonId) {
    const stats = getGameStats();
    if (stats.completedLessons.includes(lessonId)) return stats;
    stats.completedLessons.push(lessonId);
    stats.lessonsCompleted++;
    stats.streak++;
    if (stats.streak > stats.maxStreak) stats.maxStreak = stats.streak;
    if (lessonId.startsWith('b')) stats.beginnerLessons++;
    else if (lessonId.startsWith('m')) stats.mediumLessons++;
    else if (lessonId.startsWith('h')) stats.hardLessons++;
    addPoints(POINTS.LESSON_COMPLETE);
    saveGameStats(stats);
    checkBadges();
    showPointsEarned(POINTS.LESSON_COMPLETE, 'Lesson Complete!');
    return stats;
}

function markGameComplete(gameId, score, total) {
    const stats = getGameStats();
    const isNew = !stats.completedGames.includes(gameId);
    if (isNew) {
        stats.completedGames.push(gameId);
        stats.gamesPlayed++;
        stats.streak++;
        if (stats.streak > stats.maxStreak) stats.maxStreak = stats.streak;
    }
    const percent = Math.round((score / total) * 100);
    if (percent === 100) stats.perfectGames++;
    const pts = percent === 100 ? POINTS.GAME_PERFECT : POINTS.GAME_COMPLETE;
    addPoints(pts);
    saveGameStats(stats);
    checkBadges();
    showPointsEarned(pts, percent === 100 ? 'Perfect Score!' : 'Game Complete!');
    return stats;
}

function markQuizCorrect() {
    const stats = getGameStats();
    stats.correctAnswers++;
    stats.streak++;
    if (stats.streak > stats.maxStreak) stats.maxStreak = stats.streak;
    addPoints(POINTS.QUIZ_CORRECT);
    saveGameStats(stats);
    checkBadges();
}

function markFinalTest(passed, perfect) {
    const stats = getGameStats();
    stats.finalTestPassed = stats.finalTestPassed || passed;
    stats.finalTestPerfect = stats.finalTestPerfect || perfect;
    if (passed) addPoints(perfect ? 100 : POINTS.FINAL_TEST_PASS);
    stats.streak = 0;
    saveGameStats(stats);
    checkBadges();
}

function resetStreak() {
    const stats = getGameStats();
    stats.streak = 0;
    saveGameStats(stats);
}

function checkBadges() {
    const stats = getGameStats();
    let newBadge = null;
    BADGES.forEach(badge => {
        if (!stats.unlockedBadges.includes(badge.id) && badge.condition(stats)) {
            stats.unlockedBadges.push(badge.id);
            newBadge = badge;
        }
    });
    if (newBadge) {
        saveGameStats(stats);
        showBadgeUnlock(newBadge);
    }
}

function showPointsEarned(pts, label) {
    const existing = document.getElementById('pointsToast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.id = 'pointsToast';
    toast.className = 'points-toast';
    toast.innerHTML = `<span class="points-toast-icon">${materialIcon('add_circle')}</span><span>+${pts} pts — ${label}</span>`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 2200);
}

function showBadgeUnlock(badge) {
    const popup = document.createElement('div');
    popup.className = 'badge-unlock-popup';
    popup.innerHTML = `
        <div class="badge-unlock-card">
            <div class="badge-unlock-icon">${materialIcon(badge.icon, 'font-size:72px')}</div>
            <h3>Badge Unlocked!</h3>
            <p class="badge-unlock-name">${badge.name}</p>
            <p class="badge-unlock-desc">${badge.desc}</p>
            <button class="btn btn-warm" onclick="this.closest('.badge-unlock-popup').remove()">Awesome!</button>
        </div>
    `;
    document.body.appendChild(popup);
}

function updatePointsDisplay() {
    const stats = getGameStats();
    const el = document.getElementById('navPoints');
    if (el) el.textContent = stats.totalPoints;
}

function getCurrentTheme() {
    const stats = getGameStats();
    return THEMES.find(t => t.id === stats.currentTheme) || THEMES[0];
}

function applyTheme(themeId) {
    const theme = THEMES.find(t => t.id === themeId);
    if (!theme) return;
    const stats = getGameStats();
    stats.currentTheme = themeId;
    saveGameStats(stats);

    const root = document.documentElement;
    root.style.setProperty('--orange', theme.primary);
    root.style.setProperty('--orange-light', theme.secondary);
    root.style.setProperty('--warm-bg', theme.bg);
    root.style.setProperty('--text-dark', theme.text);
}
