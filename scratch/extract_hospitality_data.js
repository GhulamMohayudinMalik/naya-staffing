const fs = require('fs');

const content = fs.readFileSync('extracted_content.txt', 'utf8');
const lines = content.split(/\r?\n/);

function saveRange(fileName, start, end) {
  const slice = lines.slice(start - 1, end);
  fs.writeFileSync(`scratch/${fileName}`, slice.join('\n'), 'utf8');
  console.log(`Saved ${fileName} (${start} to ${end})`);
}

saveRange('hospitality_overview.txt', 20285, 21044);
saveRange('hotel_management.txt', 21045, 21652);
saveRange('event_planning.txt', 21653, 22260);
saveRange('culinary_arts.txt', 22261, 22868);
