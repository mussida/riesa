const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/assets/images';
const outputDir = './public/assets/images/thumbs';

// Crea la cartella thumbs se non esiste
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const bottleFiles = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];

console.log('🍷 Ottimizzazione bottiglie in corso...\n');

async function optimizeBottles() {
  const promises = bottleFiles.map(async (file) => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  ${file} non trovato, skip`);
      return;
    }
    
    try {
      await sharp(inputPath)
        .resize(200, 300, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .png({ 
          quality: 85, 
          compressionLevel: 9 
        })
        .toFile(outputPath);
        
      const originalSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;
      const saved = ((1 - newSize/originalSize) * 100).toFixed(1);
      
      console.log(`✓ ${file}: ${(originalSize/1024/1024).toFixed(2)}MB → ${(newSize/1024).toFixed(0)}KB (risparmiato ${saved}%)`);
    } catch (error) {
      console.error(`✗ Errore con ${file}:`, error.message);
    }
  });
  
  await Promise.all(promises);
  console.log('\n✅ Ottimizzazione completata!');
  console.log('📁 I thumbnail sono in: public/assets/images/thumbs/\n');
}

optimizeBottles();