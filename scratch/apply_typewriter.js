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

  // 1. Clean up invalid double-slashed / double-replaced bg-white classes
  // e.g. bg-white/5/10 -> bg-white/10, bg-white/5/5 -> bg-white/5, etc.
  content = content.replace(/bg-white\/5\/(\d+|\[[^\]]+\])/g, 'bg-white/$1');
  
  // Clean up hover:bg-white/5-hover -> hover:bg-white/10
  content = content.replace(/hover:bg-white\/5-hover/g, 'hover:bg-white/10');

  // 2. Identify the h1 tag, clean its animation classes, and wrap its contents in <Typewriter>
  const h1Match = content.match(/<h1 className="([^"]*)"([^>]*)>([\s\S]*?)<\/h1>/);
  if (h1Match) {
    const fullH1Match = h1Match[0];
    const classes = h1Match[1];
    const attrs = h1Match[2];
    const innerContent = h1Match[3];

    // Check if it's already wrapped in Typewriter to prevent double-wrapping
    if (!innerContent.includes('<Typewriter>')) {
      // Remove animation classes from h1 itself (so they don't fight with typewriter reveal)
      const cleanedClasses = classes
        .replace(/\banimate-fade-in-up\b/g, '')
        .replace(/\banimate-delay-\d+\b/g, '')
        .replace(/\bdelay-\d+\b/g, '')
        .trim()
        .replace(/\s+/g, ' ');

      const newH1 = `<h1 className="${cleanedClasses}"${attrs}>\n            <Typewriter>\n              ${innerContent.trim()}\n            </Typewriter>\n          </h1>`;
      
      content = content.replace(fullH1Match, newH1);

      // Add the import if not present
      if (!content.includes('import { Typewriter }')) {
        content = content.replace(/import\s+[^;]+;/m, (match) => {
          return `import { Typewriter } from "@/components/Typewriter";\n${match}`;
        });
      }
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    const relativePath = path.relative(targetDir, filePath);
    console.log(`Updated: ${relativePath}`);
    modifiedCount++;
  }
});

console.log(`\nDone! Processed and updated animations/classes in ${modifiedCount} files.`);
