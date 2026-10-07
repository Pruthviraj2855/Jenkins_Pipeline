const fs = require('fs');

const files = [
    'index.html',
    'script.js',
    'style.css'
];

console.log('Starting automated tests...');

for (const file of files) {
    if (!fs.existsSync(file)) {
        console.error(`TEST FAILED: ${file} not found`);
        process.exit(1);
    }

    console.log(`TEST PASSED: ${file} exists`);
}

console.log('All automated tests passed.');
