const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const I = ' style="font-size:inherit;vertical-align:middle"';
const span = (icon) => `<span class="material-symbols-outlined"${I}>${icon}</span>`;
const spanD = (icon) => `<span class="material-symbols-outlined">${icon}</icon>`;

// Remaining emojis that weren't caught in first pass
const remaining = [
  ['👁️', span('visibility')],
  ['👁', span('visibility')],
  ['📐', span('square_foot')],
  ['🎤', span('mic')],
  ['🔊', span('volume_up')],
  ['💬', span('chat')],
  ['🗂️', span('folder')],
  ['🗂', span('folder')],
  ['🔇', span('volume_off')],
  ['🔐', span('lock')],
  ['🦊', span('pets')],
  ['📧', span('email')],
  ['💰', span('paid')],
  ['🔗', span('link')],
  ['✍️', span('edit')],
  ['✍', span('edit')],
  ['👆', span('touch_app')],
  ['📂', span('folder_open')],
  ['⚙️', span('settings')],
  ['⚙', span('settings')],
  ['👻', span('ghost_offanding')],
  ['👻', span('person_off standing')],
  ['🔤', span('text_fields')],
];

// Handle ZWJ family sequences first (these are multi-codepoint)
// 👨‍👩‍👧‍👦 already handled, but 👨‍👩‍👧 might remain
content = content.split('👨\u200d👩\u200d👧').join(span('family_restroom'));
// 🐕‍🦺 service dog
content = content.split('🐕\u200d🦺').join(span('pets'));

// Now handle remaining individual emojis
for (const [emoji, replacement] of remaining) {
  content = content.split(emoji).join(replacement);
}

// Also handle the ✓ character (not really an emoji but let's leave it as is)
// ✓ is used in "Finish ✓" and check marks - it's a valid text character

// Handle any leftover keycap combining characters (20e3)
content = content.split('\u20E3').join('');

// Write back
fs.writeFileSync('script.js', content, 'utf8');
console.log('Second pass done!');
