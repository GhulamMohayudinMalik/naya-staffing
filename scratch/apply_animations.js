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
  // Skip layout files and not-found files
  if (
    filePath.endsWith('layout.tsx') ||
    filePath.endsWith('not-found.tsx')
  ) {
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Fix the duplicate animate- prefix bug for delays
  content = content.replace(/(?:animate-)+delay-/g, 'animate-delay-');

  // 2. Globally find all gold buttons that have btn-rotating-border and convert their styles 
  // from solid gold (which hides the outline) to premium glass-dark (making the border visible)
  content = content.replace(/className="([^"]*btn-rotating-border[^"]*)"/g, (match, p1) => {
    let classes = p1;
    if (classes.includes('bg-gold')) {
      classes = classes
        .replace(/\bbg-gold\b/g, 'bg-white/5')
        .replace(/\bhover:bg-gold-hover\b/g, '')
        .replace(/\btext-navy-dark\b/g, 'text-white hover:text-gold');
      if (!classes.includes('border-white/5') && !classes.includes('border-white/20')) {
        classes = classes + ' border border-white/5';
      }
    }
    return `className="${classes}"`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    const relativePath = path.relative(targetDir, filePath);
    console.log(`Fixed styles: ${relativePath}`);
    modifiedCount++;
  }
});

console.log(`\nDone! Globally updated animations in ${modifiedCount} files.`);
