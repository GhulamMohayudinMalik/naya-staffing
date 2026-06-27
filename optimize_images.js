const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.resolve('C:\\Users\\Ghulam Mohayudin\\Projects\\Freelance\\naya\\naya-staffing\\public\\images');

const folderMap = {
  "Accounting management": "accounting-management",
  "Business Development": "business-development",
  "Civil engineering": "civil-engineering",
  "Claim management": "claim-management",
  "Culinary arts": "culinary-arts",
  "Digital Strategy": "digital-strategy",
  "Ecommerce operations": "ecommerce-operations",
  "Enterprises Sales": "enterprise-sales",
  "Event planning": "event-planning",
  "Financial services": "financial-services",
  "HR consulting": "hr-consulting",
  "Healthcare": "healthcare",
  "Higher ed faculty": "higher-ed-faculty",
  "Hotel management": "hotel-management",
  "K12 Administrator": "k12-administrator",
  "Legal Staffing": "legal-staffing",
  "Merchandising": "merchandising",
  "Nursing and allied": "nursing-allied-health",
  "Performace marketing": "performance-marketing",
  "Prject management": "project-management",
  "Quality assurance": "quality-assurance",
  "Risk underwriting": "risk-underwriting",
  "Skilled trades": "skilled-trades",
  "Store leasdership": "store-leadership",
  "actuarial services": "actuarial-services",
  "cloud computing": "cloud-computing",
  "contetnt generations": "content-generation",
  "cyber security": "cyber-security",
  "edtech specialist": "edtech-specialist",
  "logistic and supply": "logistics-supply-chain",
  "manufacturing and operations": "manufacturing-operations",
  "medical devices": "medical-devices",
  "software development": "software-development"
};

async function processImages() {
  console.log("Starting image optimization process...");
  
  const folders = fs.readdirSync(imagesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const oldFolderName of folders) {
    const newFolderName = folderMap[oldFolderName] || oldFolderName.toLowerCase().replace(/\s+/g, '-');
    const oldPath = path.join(imagesDir, oldFolderName);
    const newPath = path.join(imagesDir, newFolderName);
    
    // Rename folder if needed
    if (oldFolderName !== newFolderName) {
      if (oldFolderName.toLowerCase() === newFolderName.toLowerCase()) {
         // Windows case-insensitive rename trick
         const tempPath = oldPath + "_temp";
         fs.renameSync(oldPath, tempPath);
         fs.renameSync(tempPath, newPath);
      } else if (fs.existsSync(newPath)) {
        // Real merge needed
        const files = fs.readdirSync(oldPath);
        for (const file of files) {
          fs.renameSync(path.join(oldPath, file), path.join(newPath, file));
        }
        fs.rmSync(oldPath, { recursive: true, force: true });
      } else {
        fs.renameSync(oldPath, newPath);
      }
      console.log(`Renamed folder: "${oldFolderName}" -> "${newFolderName}"`);
    }

    // Process files in the folder
    const files = fs.readdirSync(newPath).filter(f => !f.endsWith('.webp') && (f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')));
    
    if (files.length === 0) continue;

    console.log(`Processing ${files.length} images in ${newFolderName}...`);
    
    let counter = 1;
    for (const file of files) {
      const oldFilePath = path.join(newPath, file);
      // New name format: industry-name-1.webp
      const newFileName = `${newFolderName}-${counter}.webp`;
      const newFilePath = path.join(newPath, newFileName);
      
      try {
        await sharp(oldFilePath)
          .webp({ quality: 80 })
          .toFile(newFilePath);
          
        console.log(`  -> Converted ${file} to ${newFileName}`);
        
        // Delete original file
        fs.unlinkSync(oldFilePath);
        counter++;
      } catch (error) {
        console.error(`  -> Failed to convert ${file}:`, error);
      }
    }
  }
  
  console.log("Finished all image processing!");
}

processImages().catch(console.error);
