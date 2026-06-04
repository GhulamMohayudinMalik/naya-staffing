const fs = require('fs');

const content = fs.readFileSync('extracted_content.txt', 'utf8');
const lines = content.split(/\r?\n/);

function saveRange(fileName, start, end) {
  const slice = lines.slice(start - 1, end);
  fs.writeFileSync(`scratch/${fileName}`, slice.join('\n'), 'utf8');
  console.log(`Saved ${fileName} (${start} to ${end})`);
}

saveRange('professional_services_overview.txt', 22869, 23624);
saveRange('financial_services.txt', 23625, 24232);
saveRange('legal_staffing.txt', 24233, 24840);
saveRange('hr_consulting.txt', 24841, 25448);
