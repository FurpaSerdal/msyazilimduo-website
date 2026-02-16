const sharp = require('sharp');
const path = require('path');

const svgPath = path.join(__dirname, 'public', 'og-image.svg');
const pngPath = path.join(__dirname, 'public', 'og-image.png');

sharp(svgPath)
  .png({ quality: 90 })
  .toFile(pngPath)
  .then(info => {
    console.log('✅ Conversion successful!');
    console.log(`📝 File: ${pngPath}`);
    console.log(`📊 Size: ${info.width}x${info.height}px`);
    console.log(`💾 File size: ${(info.size / 1024).toFixed(2)}KB`);
  })
  .catch(err => {
    console.error('❌ Conversion failed:', err);
    process.exit(1);
  });
