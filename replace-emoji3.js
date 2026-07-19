const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const I = ' style="font-size:inherit;vertical-align:middle"';
const span = (icon) => `<span class="material-symbols-outlined"${I}>${icon}</span>`;

// Fix the 🐕‍🦺 leftover: "pets</span>‍🦺" → "pets</span>"
content = content.split('</span>\u200D\uD83E\uDDBA').join('</span>');

// Fix any other ZWJ sequences that were partially replaced
// Remove orphaned ZWJ characters
content = content.split('\u200D').join('');
// Remove orphaned 🦺
content = content.split('\uD83E\uDDBA').join('');
// Remove orphaned FE0F variation selectors
content = content.split('\uFE0F').join('');

// Fix the 6️⃣ that became just "6" after ⃣ was removed
// Look for patterns like "6" that should have been a keycap
// The original opts had ["5️⃣", "6️⃣", "4️⃣"] - after replacement, 5→looks_5, 6→6, 4→looks_4
// Let's fix "6" in that specific context
content = content.replace('"6"', `"${span('looks_6')}"`);

// ✓ is used in "Finish ✓" and in game progress indicators - this is a valid text character, not an emoji
// Leave it as is

fs.writeFileSync('script.js', content, 'utf8');
console.log('Cleanup pass done!');
