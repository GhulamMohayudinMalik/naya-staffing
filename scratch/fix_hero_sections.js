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
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find target hero section (h-[90vh] or h-[80vh])
  const heroMatch = content.match(/<section[^>]*className="relative h-\[(?:80|90)vh\]/);
  if (!heroMatch) {
    return;
  }
  
  const startIdx = heroMatch.index;
  const endIdx = content.indexOf('</section>', startIdx);
  if (endIdx === -1) {
    console.warn(`Warning: Found target section start but no closing tag in ${filePath}`);
    return;
  }
  
  const heroEndIdx = endIdx + '</section>'.length;
  let heroBlock = content.substring(startIdx, heroEndIdx);
  let originalHeroBlock = heroBlock;
  
  // 1. Spacing fix on the section tag
  heroBlock = heroBlock.replace(
    /className="relative h-\[(?:80|90)vh\] min-h-\[\d+px\] flex items-center justify-center overflow-hidden"/,
    'className="relative pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden"'
  );
  
  // 2. Remove pt-20 from inner container
  heroBlock = heroBlock.replace(
    /className="container mx-auto px-6 relative z-10 pt-20"/,
    'className="container mx-auto px-6 relative z-10"'
  );
  
  // 3. Wrapper centering
  heroBlock = heroBlock.replace(
    /className="max-w-4xl animate-fade-in-up"/,
    'className="max-w-4xl mx-auto flex flex-col items-center text-center animate-fade-in-up"'
  );
  
  // 4. Center max-w-3xl paragraph
  heroBlock = heroBlock.replace(
    /max-w-3xl(?! mx-auto)/g,
    'max-w-3xl mx-auto'
  );
  
  // 5. Center flex buttons
  heroBlock = heroBlock.replace(
    /className="flex flex-wrap gap-4"/g,
    'className="flex flex-wrap gap-4 justify-center"'
  );
  
  // 6. Center trust line
  heroBlock = heroBlock.replace(
    /className="pt-10 border-t border-white\/5 mt-10 max-w-xl"/,
    'className="pt-10 border-t border-white/5 mt-10 max-w-xl mx-auto text-center"'
  );
  
  if (heroBlock !== originalHeroBlock) {
    const updatedContent = content.substring(0, startIdx) + heroBlock + content.substring(heroEndIdx);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    const relativePath = path.relative(targetDir, filePath);
    console.log(`Updated: ${relativePath}`);
    modifiedCount++;
  }
});

console.log(`\nCompleted! Modified ${modifiedCount} files.`);
