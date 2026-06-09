const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('extracted_content.txt', 'utf8');
const lines = content.split('\n');

const urls = [];
lines.forEach((line, idx) => {
  const match = line.match(/Suggested URL:\s*([^\s]+)/i);
  if (match) {
    urls.push({ lineNum: idx + 1, url: match[1], text: line.trim() });
  } else {
    if (line.trim().toLowerCase() === 'suggested url') {
      let nextLine = '';
      let offset = 1;
      while (idx + offset < lines.length && !nextLine.trim()) {
        nextLine = lines[idx + offset];
        offset++;
      }
      if (nextLine.trim()) {
        urls.push({ lineNum: idx + 1, url: nextLine.trim(), text: 'Suggested URL: ' + nextLine.trim() });
      }
    }
  }
});

console.log('Total URLs found in doc:', urls.length);
urls.forEach(u => {
  let urlVal = u.url.replace(/&amp;/g, '&').replace(/^\s*|\s*$/g, '');
  if (urlVal === '/' || !urlVal) {
    const p1 = path.join('src', 'app', 'page.tsx');
    console.log(`[Home] / -> ${fs.existsSync(p1) ? 'EXISTS' : 'MISSING'} (${p1})`);
    return;
  }
  
  const cleanUrl = urlVal.replace(/^\//, '').replace(/\/$/, '');
  const path1 = path.join('src', 'app', cleanUrl, 'page.tsx');
  const path2 = path.join('src', 'app', path.basename(cleanUrl), 'page.tsx');
  
  const exists1 = fs.existsSync(path1);
  const exists2 = fs.existsSync(path2);
  
  if (exists1) {
    console.log(`[OK] ${urlVal} -> EXISTS at ${path1}`);
  } else if (exists2) {
    console.log(`[OK] ${urlVal} -> EXISTS at ${path2} (Flattened)`);
  } else {
    console.log(`[MISSING] ${urlVal} -> (tried ${path1} and ${path2})`);
  }
});
