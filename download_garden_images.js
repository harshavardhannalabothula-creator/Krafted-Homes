const fs = require('fs');
const path = require('path');
const https = require('https');

const newGardenImages = {
  // Ultra HD Luxury Villa Backyard & Garden Sanctuary photos from Unsplash
  'private_garden_sanctuary.jpg': 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=2400&q=95',
  'teak_backyard_deck.jpg': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=95',
  'botanical_courtyard.jpg': 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2400&q=95',
  'luxury_villa_garden.jpg': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=95',
  'contemporary_garden_deck.jpg': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=95'
};

const outputDir = path.join(__dirname, 'public', 'images');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed with status code ${response.statusCode}`));
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
  console.log('Downloading fresh HD luxury garden images...');
  for (const [name, url] of Object.entries(newGardenImages)) {
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
