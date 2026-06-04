const fs = require('fs');

const content = fs.readFileSync('extracted_content.txt', 'utf8');
const lines = content.split(/\r?\n/);

function saveRange(fileName, start, end) {
  const slice = lines.slice(start - 1, end);
  fs.writeFileSync(`scratch/${fileName}`, slice.join('\n'), 'utf8');
  console.log(`Saved ${fileName} (${start} to ${end})`);
}

saveRange('education_overview.txt', 25449, 26200);
saveRange('k_12_administration.txt', 26205, 26808);
saveRange('higher_ed_faculty.txt', 26813, 27416);
saveRange('edtech_specialists.txt', 27421, 28024);
