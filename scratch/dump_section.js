const fs = require('fs');

const content = fs.readFileSync('extracted_content.txt', 'utf8');
const lines = content.split(/\r?\n/);

const startLine = parseInt(process.argv[2], 10);
const endLine = parseInt(process.argv[3], 10);

if (isNaN(startLine) || isNaN(endLine)) {
  console.error("Please provide start and end line numbers");
  process.exit(1);
}

for (let i = startLine - 1; i < endLine && i < lines.length; i++) {
  console.log(`${i + 1}: ${lines[i]}`);
}
