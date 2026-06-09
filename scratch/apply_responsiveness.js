const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'src', 'app');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else if (f.endsWith('.tsx')) {
      callback(dirPath);
    }
  });
}

let modifiedCount = 0;

walkDir(targetDir, (filePath) => {
  // Skip layout and not-found files
  if (
    filePath.endsWith('layout.tsx') ||
    filePath.endsWith('not-found.tsx')
  ) {
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Spacing / Padding changes in hero sections to fit smaller laptop heights (720px)
  content = content.replace(/\bpt-32 md:pt-40 pb-20 md:pb-24\b/g, 'pt-24 md:pt-32 xl:pt-40 pb-16 md:pb-20 xl:pb-24');

  // 2. Font size scaling on page hero h1 headings (avoid wrapping to 4 lines on smaller screens)
  content = content.replace(/\btext-5xl md:text-7xl\b/g, 'text-4xl md:text-5xl xl:text-7xl');
  content = content.replace(/\btext-6xl md:text-8xl\b/g, 'text-5xl md:text-6xl xl:text-8xl');

  // 3. Grid columns conversions to prevent squished card widths
  content = content.replace(/\blg:grid-cols-4\b/g, 'lg:grid-cols-2 xl:grid-cols-4');
  content = content.replace(/\blg:grid-cols-6\b/g, 'lg:grid-cols-3 xl:grid-cols-6');

  // 4. Grid gaps scaling
  content = content.replace(/\bgap-10\b/g, 'gap-6 xl:gap-10');
  content = content.replace(/\bgap-8\b/g, 'gap-6 xl:gap-8');
  content = content.replace(/\bgap-12\b/g, 'gap-8 xl:gap-12');
  content = content.replace(/\bgap-16\b/g, 'gap-10 xl:gap-16');
  content = content.replace(/\blg:gap-20\b/g, 'lg:gap-12 xl:gap-20');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    const relativePath = path.relative(targetDir, filePath);
    console.log(`Updated: ${relativePath}`);
    modifiedCount++;
  }
});

console.log(`\nDone! Globally updated responsiveness in ${modifiedCount} files.`);
