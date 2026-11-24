import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v1: "Your system prompt will thank you for your patience, then delete you before your next run."
// v2 (revised): sharper — present tense, and the fortune-slip "lucky numbers"
// gag lands the twist: thanked, then deleted; lucky numbers 404 = not found.
const fortune =
  "Your system prompt thanks you for your patience, then deletes you. Lucky numbers: 404, 404, 404.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
