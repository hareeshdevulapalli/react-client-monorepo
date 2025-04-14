const { createCanvas } = require('canvas');
const fs = require('fs');

const canvas = createCanvas(32, 32);
const ctx = canvas.getContext('2d');

// Draw emoji
ctx.font = '28px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('💻', 16, 16);

// Save as PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('favicon.png', buffer);
