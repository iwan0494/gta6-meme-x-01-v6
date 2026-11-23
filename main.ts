import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(botDir, "POST.json");
let raw: string;
try {
  raw = readFileSync(src, "utf8");
} catch {
  console.error(`error: cannot read ${src}`);
  process.exit(1);
}

let data: unknown;
try {
  data = JSON.parse(raw);
} catch {
  console.error("error: POST.json is not valid JSON");
  process.exit(1);
}

if (typeof data !== "object" || data === null || Array.isArray(data)) {
  console.error("error: POST.json must be a JSON object with a url field");
  process.exit(1);
}

const url = (data as { url?: unknown }).url;
if (typeof url !== "string") {
  console.error("error: POST.json url must be a string");
  process.exit(1);
}

const match = /^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/(\d+)$/.exec(url);
if (!match) {
  console.error(
    `error: POST.json url ${JSON.stringify(url)} is not a valid X post URL; ` +
      "expected https://x.com/<handle>/status/<digits> " +
      "or https://twitter.com/<handle>/status/<digits>",
  );
  process.exit(1);
}

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "POST.json"), raw);
} catch {
  console.error(`error: cannot write ${join(outDir, "POST.json")}`);
  process.exit(1);
}
console.log(`wrote ${join(outDir, "POST.json")} for post ${match[2]}`);
