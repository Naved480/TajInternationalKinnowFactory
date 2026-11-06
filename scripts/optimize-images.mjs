// Resizes the original factory photos (in the parent folder) into web-friendly
// JPEGs under public/images. Run with: npm run images
import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs';

const SRC = path.resolve(process.cwd(), '..');
const OUT = path.resolve(process.cwd(), 'public/images');
fs.mkdirSync(OUT, { recursive: true });

const map = [
  ['logo.jpeg', 'logo.jpg', 900],
  ['our card.jpeg', 'business-card.jpg', 1000],
  ['factory front.jpeg', 'factory-front.jpg', 1800],
  ['WhatsApp Image 2026-11-06 at 12.10.52 PM.jpeg', 'factory-loading-bays.jpg', 1600],
  ['WhatsApp Image 2026-11-06 at 12.10.51 PM.jpeg', 'cold-storage-compressors.jpg', 1600],
  ['image.jpeg', 'office.jpg', 1600],
  ['name.jpeg', 'name-sign.jpg', 1800],
  ['name board.jpeg', 'road-sign.jpg', 1000],
  ['kinnow.jpeg', 'sorting-line.jpg', 1800],
  ['machine image.jpeg', 'washing-waxing.jpg', 1600],
  ['machine.jpeg', 'size-grader.jpg', 1600],
  ['processing.jpeg', 'inspection.jpg', 1600],
  ['processing kinnow.jpeg', 'hand-packing.jpg', 1600],
  ['box with kinnow.jpeg', 'branded-cartons.jpg', 1600],
  ['packing.jpeg', 'open-cartons.jpg', 1600],
  ['paking 2.jpeg', 'carton-closeup.jpg', 1600],
  ['ready to send.jpeg', 'ready-to-ship.jpg', 1400],
  ['image of boxes.jpeg', 'cold-store-inside.jpg', 1800],
  ['cold storage.jpeg', 'cold-storage-sign.jpg', 1400],
];

for (const [src, out, width] of map) {
  const input = path.join(SRC, src);
  if (!fs.existsSync(input)) { console.warn('missing', src); continue; }
  await sharp(input).rotate().resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(OUT, out));
  console.log('✓', out);
}
