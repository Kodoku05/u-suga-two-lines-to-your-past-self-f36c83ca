import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "Don't sign the papers beside Dad's funeral flowers on the kitchen table.\nYou sold the house he built for half its worth, and by Christmas Mom was knocking at the front door with her old key still on her ring.";
const lines = entry.split("\n");
if (
  entry.length < 1 || entry.length > 280 ||
  !/^[\x20-\x7e\n]+$/.test(entry) ||
  lines.length !== 2 ||
  lines.some((line) => line.trim() !== line || !/^[^.?!\r\n]+\.$/.test(line))
) {
  throw new Error("Entry must be ASCII, 1-280 characters, and two single-sentence lines.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
