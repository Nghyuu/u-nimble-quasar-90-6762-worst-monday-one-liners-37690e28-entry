import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line = "Monday: stand-up ran 47 minutes, the deploy's still stuck, my inbox hit 1,000 \u2014 and the only thing that shipped was my will to live.";

// Gate: exactly one line, 1-140 chars, not only whitespace.
if (!line || line.length > 140 || line.trim().length === 0 || line.includes("\n")) {
  throw new Error("entry line fails the gate");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line + "\n", "utf8");
chmodSync(outPath, 0o644);
