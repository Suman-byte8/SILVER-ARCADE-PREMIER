const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a 100x100 red image
const width = 100;
const height = 100;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Fill the canvas with red color
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, width, height);

// Save the image to a file
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('test_hero.png', buffer);
console.log('Test image created: test_hero.png');
