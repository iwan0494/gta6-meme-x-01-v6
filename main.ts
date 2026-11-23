// main.ts — gta6-meme-x-01 v6 watermark entry.
// Node 22, standard library only.
// Reads POST.json from the bot directory, checks that its `url` points at
// a real X post, and copies it unchanged to the output directory.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const POST_URL = /^https:\/\/(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/\d+$/;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const postPath = join(BOT_DIR, "POST.json");
let raw: string;
try {
  raw = readFileSync(postPath, "utf8");
} catch {
  fail(`cannot read ${postPath}`);
}

let post: unknown;
try {
  post = JSON.parse(raw);
} catch {
  fail(`${postPath} is not valid JSON`);
}

if (typeof post !== "object" || post === null || Array.isArray(post)) {
  fail(`${postPath} must contain a JSON object with a url field`);
}

const url = (post as { url?: unknown }).url;
if (typeof url !== "string" || !POST_URL.test(url)) {
  fail(`POST.json url ${JSON.stringify(url)} is not a valid X post URL; expected https://x.com/<handle>/status/<id>`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "POST.json"), raw);
console.log(`wrote ${join(OUT_DIR, "POST.json")} for post ${url.split("/").pop()}`);
