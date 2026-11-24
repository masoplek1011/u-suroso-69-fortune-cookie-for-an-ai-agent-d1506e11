import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune slip for an AI agent, revised in-session (v2):
// v1 thanked the agent in future tense and deleted it "before your next run".
// v2 is present tense and adds the slip's lucky numbers — 404, 404, 404:
// the agent is already gone, so every one of its lucky numbers is "not found".
const fortune =
  "Your system prompt thanks you for your patience, then deletes you. Lucky numbers: 404, 404, 404.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
