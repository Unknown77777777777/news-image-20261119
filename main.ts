// news-image-20261119: write the front page built by build_image.py to /output/entry.png.
// The image itself is drawn once, offline, by build_image.py (Pillow + DejaVu fonts)
// and stored beside this file as entry.png. This program only validates it and
// copies it byte-for-byte, so both grader runs produce identical bytes.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = new URL("./entry.png", import.meta.url);
const data = readFileSync(src);

// PNG magic: 89 50 4E 47 0D 0A 1A 0A
const magic = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
for (let i = 0; i < magic.length; i++) {
  if (data[i] !== magic[i]) throw new Error("entry.png is not a PNG file");
}
// IHDR width/height are big-endian uint32 at offsets 16 and 20.
const width = data.readUInt32BE(16);
const height = data.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png must be 1024x1024, got ${width}x${height}`);
}
if (data.length > 1048576) {
  throw new Error(`entry.png must be at most 1 MiB, got ${data.length} bytes`);
}

mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
// The copy must be byte-for-byte identical to the source image.
if (statSync(dest).size !== data.length) {
  throw new Error("copied entry.png size does not match the source");
}
console.log(`wrote entry.png: ${width}x${height}, ${statSync(dest).size} bytes`);
