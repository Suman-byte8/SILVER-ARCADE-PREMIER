const fs = require('fs');

// A very small, valid PNG image (1x1 pixel, transparent)
const base64PNG = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';

// Decode base64 and write to file
const buffer = Buffer.from(base64PNG, 'base64');
fs.writeFileSync('test_hero.png', buffer);
console.log('Created test_hero.png');
