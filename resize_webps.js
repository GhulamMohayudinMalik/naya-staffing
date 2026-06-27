const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.resolve('C:\\Users\\Ghulam Mohayudin\\Projects\\Freelance\\naya\\naya-staffing\\public\\images');

async function resizeImages() {
  console.log("Starting WebP resizing process to reduce dimensions and file size...");
  
  const folders = fs.readdirSync(imagesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const folderName of folders) {
    const folderPath = path.join(imagesDir, folderName);
    
    // Process .webp files in the folder
    const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.webp'));
    
    if (files.length === 0) continue;

    console.log(`Resizing ${files.length} images in ${folderName}...`);
    
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const tempPath = path.join(folderPath, `temp_${file}`);
      
      try {
        const inputBuffer = fs.readFileSync(filePath);
        await sharp(inputBuffer)
          .resize({ width: 1200, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(tempPath);
          
        // Overwrite original with the smaller resized version
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        
        console.log(`  -> Resized ${file}`);
      } catch (error) {
        console.error(`  -> Failed to resize ${file}:`, error);
        if (fs.existsSync(tempPath)) {
            fs.unlinkSync(tempPath);
        }
      }
    }
  }
  
  console.log("Finished all resizing!");
}

resizeImages().catch(console.error);
