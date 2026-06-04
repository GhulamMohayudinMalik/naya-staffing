const fs = require('fs');

const content = fs.readFileSync('extracted_content.txt', 'utf8');
const lines = content.split(/\r?\n/);

function saveRange(fileName, start, end) {
  const slice = lines.slice(start - 1, end);
  fs.writeFileSync(`scratch/${fileName}`, slice.join('\n'), 'utf8');
  console.log(`Saved ${fileName} (${start} to ${end})`);
}

saveRange('industrial_overview.txt', 17691, 18454);
saveRange('manufacturing_operations.txt', 18455, 19064);
saveRange('logistics_supply_chain.txt', 19065, 19674);
saveRange('quality_assurance.txt', 19675, 20284);
