const sharp = require('sharp');
const path = require('path');

async function createFavicon96() {
  try {
    // favicon.png'yi oku ve 96x96'ya scale et
    await sharp(path.join(__dirname, '../public/favicon.png'))
      .resize(96, 96, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile(path.join(__dirname, '../public/favicon-96x96.png'));
    
    console.log('✓ favicon-96x96.png oluşturuldu (96x96)');
  } catch (err) {
    console.error('Hata:', err);
  }
}

createFavicon96();
