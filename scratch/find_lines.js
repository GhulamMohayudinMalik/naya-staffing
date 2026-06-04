const fs = require('fs');

const content = fs.readFileSync('extracted_content.txt', 'utf8');
const lines = content.split(/\r?\n/);

const query = process.argv[2] || '';
console.log(`Searching for "${query}":`);
let found = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].toLowerCase().includes(query.toLowerCase())) {
    console.log(`Line ${i + 1}: ${lines[i]}`);

  }
}
