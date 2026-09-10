const fs = require('fs');
const path = require('path');
const https = require('https');

const images = {
  'raw_land.jpg': 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=90',
  'survey_grid.jpg': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=90',
  'masterplan_map.jpg': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90',
  'green_mindfulness.jpg': 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2400&q=90',
  'villa_exterior.jpg': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=90',
  'villa_interior.jpg': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90',
  'clubhouse.jpg': 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=2400&q=90',
  'hero_community.jpg': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=90',
  'villa_foyer.jpg': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90',
  'villa_dining.jpg': 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2400&q=90',
  'villa_kitchen.jpg': 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2400&q=90',
  'villa_backyard.jpg': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=90',
  'villa_bedroom.jpg': 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=2400&q=90',
  'villa_terrace.jpg': 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=2400&q=90',
  'sports_wing.jpg': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=90',
  'banquet_hall.jpg': 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2400&q=90',
  'library_nook.jpg': 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2400&q=90',
  'cafe_terrace.jpg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=90',
  'kids_play.jpg': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=90',
  'zen_yoga.jpg': 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2400&q=90'
};

const outputDir = path.join(__dirname, 'public', 'images');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  for (const [name, url] of Object.entries(images)) {
    const dest = path.join(outputDir, name);
    console.log(`Downloading ${name}...`);
    try {
      await download(url, dest);
      console.log(`Downloaded ${name} successfully.`);
    } catch (e) {
      console.error(`Failed ${name}:`, e.message);
    }
  }
}

run();
