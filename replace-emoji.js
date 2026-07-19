const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

// Helper: inline style for emojis within text
const I = ' style="font-size:inherit;vertical-align:middle"';
const span = (icon) => `<span class="material-symbols-outlined"${I}>${icon}</span>`;
// Helper: default sizing (no extra style) for large display emojis
const spanD = (icon) => `<span class="material-symbols-outlined">${icon}</span>`;

// ===== LESSON TITLES (default sizing - these are section headers) =====
content = content.replace('title: "🤖 What is AI?"', `title: "${spanD('smart_toy')} What is AI?"`);
content = content.replace('title: "🧠 How AI Thinks"', `title: "${spanD('psychology')} How AI Thinks"`);
content = content.replace('title: "👀 AI Sees Things"', `title: "${spanD('visibility')} AI Sees Things"`);
content = content.replace('title: "🗣️ AI Listens & Talks"', `title: "${spanD('record_voice_over')} AI Listens &amp; Talks"`);
content = content.replace('title: "🎮 AI Plays Games"', `title: "${spanD('sports_esports')} AI Plays Games"`);
content = content.replace('title: "🌍 AI Helps the World"', `title: "${spanD('public')} AI Helps the World"`);
content = content.replace('title: "📊 Training Data"', `title: "${spanD('bar_chart')} Training Data"`);
content = content.replace('title: "🎨 AI Creates Art"', `title: "${spanD('palette')} AI Creates Art"`);
content = content.replace('title: "🔍 Patterns & Rules"', `title: "${spanD('search')} Patterns &amp; Rules"`);
content = content.replace('title: "🤖 Chatbots & Helpers"', `title: "${spanD('smart_toy')} Chatbots &amp; Helpers"`);
content = content.replace('title: "🚗 Self-Driving Cars"', `title: "${spanD('directions_car')} Self-Driving Cars"`);
content = content.replace('title: "🎬 AI Recommends"', `title: "${spanD('movie')} AI Recommends"`);
content = content.replace('title: "🏗️ Neural Networks"', `title: "${spanD('construction')} Neural Networks"`);
content = content.replace('title: "🧬 Deep Learning"', `title: "${spanD('biotech')} Deep Learning"`);
content = content.replace('title: "⚖️ AI Bias & Fairness"', `title: "${spanD('balance')} AI Bias &amp; Fairness"`);
content = content.replace('title: "🔒 AI & Privacy"', `title: "${spanD('lock')} AI &amp; Privacy"`);
content = content.replace('title: "🧪 AI in Science"', `title: "${spanD('science')} AI in Science"`);
content = content.replace('title: "🚀 The Future of AI"', `title: "${spanD('rocket_launch')} The Future of AI"`);

// ===== GAME TITLES (default sizing) =====
content = content.replace('title: "🎯 AI or Human?"', `title: "${spanD('target')} AI or Human?"`);
content = content.replace('title: "🐱 Pet Classifier"', `title: "${spanD('pets')} Pet Classifier"`);
content = content.replace('title: "🔢 Number Pattern"', `title: "${spanD('pin')} Number Pattern"`);
content = content.replace('title: "🗣️ Word Match"', `title: "${spanD('record_voice_over')} Word Match"`);
content = content.replace('title: "🌈 Color Sort"', `title: "${spanD('palette')} Color Sort"`);
content = content.replace('title: "🧩 Shape Match"', `title: "${spanD('extension')} Shape Match"`);
content = content.replace('title: "🤖 Train the Robot"', `title: "${spanD('smart_toy')} Train the Robot"`);
content = content.replace('title: "🧩 Pattern Detective"', `title: "${spanD('extension')} Pattern Detective"`);
content = content.replace('title: "🎵 Music Maker"', `title: "${spanD('music_note')} Music Maker"`);
content = content.replace('title: "📝 Story Builder"', `title: "${spanD('edit_note')} Story Builder"`);
content = content.replace('title: "🗺️ Map Explorer"', `title: "${spanD('map')} Map Explorer"`);
content = content.replace('title: "🖼️ Image Quiz"', `title: "${spanD('image')} Image Quiz"`);
content = content.replace('title: "🧠 Neural Net Builder"', `title: "${spanD('psychology')} Neural Net Builder"`);
content = content.replace('title: "🔐 Code Breaker"', `title: "${spanD('lock')} Code Breaker"`);
content = content.replace('title: "🏗️ AI Architect"', `title: "${spanD('construction')} AI Architect"`);
content = content.replace('title: "⚖️ Bias Busters"', `title: "${spanD('balance')} Bias Busters"`);
content = content.replace('title: "🎯 Decision Tree"', `title: "${spanD('target')} Decision Tree"`);
content = content.replace('title: "🏆 AI Challenge"', `title: "${spanD('emoji_events')} AI Challenge"`);

// ===== ALL INLINE EMOJIS - lesson content, game content, chat, etc. =====
// Using replaceAll for emojis that appear many times in different contexts

// Primary mapping emojis (from user's list)
const replacements = [
  // From user mapping - applied broadly
  ['🤖', span('smart_toy')],
  ['🧠', span('psychology')],
  ['👀', span('visibility')],
  ['🗣️', span('record_voice_over')],
  ['🎮', span('sports_esports')],
  ['🌍', span('public')],
  ['📊', span('bar_chart')],
  ['🎨', span('palette')],
  ['🔍', span('search')],
  ['🚗', span('directions_car')],
  ['🎬', span('movie')],
  ['🏗️', span('construction')],
  ['🧬', span('biotech')],
  ['⚖️', span('balance')],
  ['🔒', span('lock')],
  ['🧪', span('science')],
  ['🚀', span('rocket_launch')],
  ['⭐', span('star')],
  ['🏠', span('home')],
  ['📚', span('menu_book')],
  ['🏆', span('emoji_events')],
  ['💡', span('lightbulb')],
  ['🌟', span('star')],
  ['🎯', span('target')],
  ['🐱', span('pets')],
  ['🔢', span('pin')],
  ['🌈', span('palette')],
  ['🧩', span('extension')],
  ['🎵', span('music_note')],
  ['📝', span('edit_note')],
  ['🗺️', span('map')],
  ['🖼️', span('image')],
  ['💯', span('looks_one')],
  ['🧙', span('auto_stories')],
  ['🔥', span('local_fire_department')],
  ['👑', span('crown')],
  ['💎', span('diamond')],
  ['⚡', span('bolt')],
  ['🌱', span('grass')],
  ['🌿', span('eco')],
  ['🌳', span('forest')],
  ['🏅', span('military_tech')],
  ['👶', span('child_care')],
  ['❤️', span('favorite')],
  ['🛡️', span('shield')],
  ['🌐', span('language')],
  ['🔑', span('key')],
  ['⚠️', span('warning')],
  ['⏱️', span('schedule')],
  ['▶️', span('play_arrow')],
  ['✅', span('check_circle')],
  ['❌', span('cancel')],
  ['📱', span('smartphone')],
  ['📸', span('photo_camera')],
  ['🏛️', span('account_balance')],
  ['✨', span('auto_awesome')],
  ['🔮', span('auto_awesome')],
  ['🌤️', span('wb_sunny')],
  ['🛒', span('shopping_cart')],
  ['👥', span('group')],
  ['📈', span('trending_up')],
  ['📋', span('list')],
  ['🔧', span('build')],
  ['🤝', span('handshake')],
  ['🏦', span('account_balance')],
  ['👮', span('shield')],
  ['📷', span('photo_camera')],
  ['📡', span('cell_tower')],
  ['🚶', span('directions_walk')],
  ['🚦', span('traffic')],
  ['1️⃣', span('looks_one')],
  ['2️⃣', span('looks_two')],
  ['3️⃣', span('looks_3')],
  ['4️⃣', span('looks_4')],
  ['5️⃣', span('looks_5')],
  ['🎲', span('dice')],
  ['🏥', span('local_hospital')],
  ['🌾', span('grass')],
  ['🐕', span('pets')],
  ['📜', span('description')],
  ['💪', span('fitness_center')],
  ['🖌️', span('brush')],
  ['👨\u200d👩\u200d👧\u200d👦', span('family_restroom')],
  ['🔄', span('tune')],
  ['💚', span('favorite')],
  ['📍', span('location_on')],
];

// Additional emojis not in the user's mapping but found in the file
const extraReplacements = [
  // Faces and people
  ['😊', span('sentiment_very_satisfied')],
  ['😄', span('sentiment_very_satisfied')],
  ['😃', span('sentiment_very_satisfied')],
  ['🤔', span('psychology')],
  ['👋', span('waving_hand')],
  ['👍', span('thumb_up')],
  ['😱', span('sentiment_very_dissatisfied')],
  ['🧑', span('person')],
  ['👤', span('person')],

  // Animals
  ['🐾', span('pets')],
  ['🐶', span('pets')],
  ['😺', span('pets')],
  ['🐕\u200d🦺', span('pets')],
  ['🐈\u200d⬛', span('pets')],
  ['🐩', span('pets')],
  ['🙀', span('pets')],
  ['🐈', span('pets')],
  ['🐦', span('pets')],
  ['🐟', span('pets')],
  ['🐴', span('pets')],
  ['🐰', span('pets')],
  ['🐻', span('pets')],

  // Fruits/food
  ['🍎', span('lunch_dining')],
  ['🍊', span('lunch_dining')],
  ['🍋', span('lunch_dining')],
  ['🍇', span('lunch_dining')],
  ['🍓', span('lunch_dining')],
  ['🍌', span('lunch_dining')],
  ['🥕', span('lunch_dining')],
  ['🥦', span('lunch_dining')],
  ['🌽', span('lunch_dining')],
  ['🫐', span('lunch_dining')],
  ['🍪', span('cookie')],
  ['🎂', span('cake')],

  // Vehicles
  ['🚌', span('directions_bus')],
  ['✈️', span('flight')],
  ['🚢', span('directions_boat')],
  ['🚲', span('directions_bike')],
  ['🚂', span('train')],

  // Buildings/places
  ['🏢', span('apartment')],
  ['🌸', span('local_florist')],
  ['🌻', span('local_florist')],

  // Shapes/patterns
  ['🔴', span('radio_button_checked')],
  ['🔵', span('radio_button_checked')],
  ['🟢', span('radio_button_checked')],
  ['🟡', span('radio_button_checked')],
  ['🟩', span('crop_square')],
  ['🟦', span('crop_square')],
  ['🟥', span('crop_square')],
  ['⬛', span('crop_square')],
  ['⭕', span('radio_button_unchecked')],
  ['🔺', span('change_history')],

  // Weather/nature
  ['☀️', span('wb_sunny')],
  ['🌙', span('dark_mode')],
  ['🌅', span('wb_sunny')],
  ['⛅', span('wb_sunny')],
  ['🌌', span('public')],
  ['☄️', span('comet')],

  // Arrows/navigation
  ['⬆️', span('arrow_upward')],
  ['⬇️', span('arrow_downward')],
  ['➡️', span('arrow_forward')],
  ['⬅️', span('arrow_back')],

  // Objects
  ['📥', span('download')],
  ['📁', span('folder')],
  ['📬', span('mail')],
  ['📨', span('mail')],
  ['🗑️', span('delete')],
  ['🧾', span('description')],
  ['⌨️', span('keyboard')],
  ['↩️', span('reply')],
  ['📺', span('tv')],
  ['🔔', span('notifications')],
  ['📖', span('menu_book')],
  ['🎓', span('school')],
  ['🔬', span('science')],
  ['🔭', span('science')],
  ['💊', span('medicine')],
  ['🛰️', span('satellite_alt')],
  ['✏️', span('edit')],
  ['🌲', span('forest')],
  ['⛰️', span('terrain')],
  ['🏔️', span('terrain')],
  ['🎉', span('celebration')],
  ['🎶', span('music_note')],
  ['🥁', span('music_note')],
  ['❓', span('help_outline')],
  ['🚫', span('block')],

  // Emojis in chat responses
  ['🟢', span('circle')],
  ['🔵', span('circle')],
  ['🧭', span('explore')],
];

// Apply all inline replacements
for (const [emoji, replacement] of replacements) {
  content = content.split(emoji).join(replacement);
}
for (const [emoji, replacement] of extraReplacements) {
  content = content.split(emoji).join(replacement);
}

// ===== Fix textContent to innerHTML where needed =====

// Lesson title rendering - needs innerHTML to render material symbols
content = content.replace(
  "document.getElementById('lessonTitle').textContent = lesson.title;",
  "document.getElementById('lessonTitle').innerHTML = lesson.title;"
);

// showScorePopup - scoreEmoji needs innerHTML
content = content.replace(
  "document.getElementById('scoreEmoji').textContent = emoji;",
  "document.getElementById('scoreEmoji').innerHTML = emoji;"
);

// showScore function - scoreEmoji needs innerHTML
content = content.replace(
  "document.getElementById('scoreEmoji').textContent = emoji;\n    document.getElementById('scoreText').textContent",
  "document.getElementById('scoreEmoji').innerHTML = emoji;\n    document.getElementById('scoreText').textContent"
);

// Chat avatars - need innerHTML
content = content.replace(
  "avatar.textContent = isUser ? '😊' : '🤖';",
  `avatar.innerHTML = isUser ? '${spanD('sentiment_very_satisfied')}' : '${spanD('smart_toy')}';`
);

// Typing indicator avatar
content = content.replace(
  "avatar.textContent = '🤖';",
  `avatar.innerHTML = '${spanD('smart_toy')}';`
);

// Theme icon - needs innerHTML
content = content.replace(
  "document.getElementById('themeIcon').textContent = '☀️';",
  `document.getElementById('themeIcon').innerHTML = '${spanD('wb_sunny')}';`
);
content = content.replace(
  "document.getElementById('themeIcon').textContent = '🌙';",
  `document.getElementById('themeIcon').innerHTML = '${spanD('dark_mode')}';`
);

// Chat welcome message - already uses innerHTML but let's make sure the wave emoji is replaced
// (Already handled by the bulk replacement above)

// Write the result
fs.writeFileSync('script.js', content, 'utf8');
console.log('Done! All emojis replaced.');
