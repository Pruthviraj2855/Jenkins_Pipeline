const fs = require('fs');

const files = [
    'index.html',
    'script.js',
    'style.css'
];

console.log('Starting build...');

for (const file of files) {
    if (!fs.existsSync(file)) {
        console.error(`BUILD FAILED: ${file} not found`);
        process.exit(1);
    }

    console.log(`BUILD PASSED: ${file} exists`);
}

console.log('Build completed successfully.');
