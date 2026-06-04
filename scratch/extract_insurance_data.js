const fs = require('fs');

const content = fs.readFileSync('extracted_content.txt', 'utf8');
const lines = content.split(/\r?\n/);

function saveRange(fileName, start, end) {
  const slice = lines.slice(start - 1, end);
  fs.writeFileSync(`scratch/${fileName}`, slice.join('\n'), 'utf8');
  console.log(`Saved ${fileName} (${start} to ${end})`);
}

saveRange('insurance_overview.txt', 28029, 28784);
saveRange('actuarial_services.txt', 28789, 29384);
saveRange('claims_management.txt', 29389, 29988);
saveRange('risk_underwriting.txt', 29993, 30600);
