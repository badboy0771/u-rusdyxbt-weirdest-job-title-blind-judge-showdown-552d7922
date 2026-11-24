// Weirdest Job Title: Blind Judge Showdown — a single job title.
// Writes the title to /output/entry.txt after checking the gate:
// UTF-8 text, 1-60 characters, a single line, no surrounding whitespace.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "Chief Morale Officer for the Office Printer";

const MAX_CHARS = 60;

function main(): void {
  const text = ENTRY.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, must be 1-${MAX_CHARS}`);
  }
  if (text !== ENTRY || /\n/.test(text)) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
  // The gate counts characters, but keep the byte size sane too so the
  // title stays a one-line string whatever the encoding.
  if (new TextEncoder().encode(text).length > 120) {
    throw new Error("entry is too long in bytes");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  const back = readFileSync("/output/entry.txt", "utf8");
  if (back !== text) throw new Error("read-back mismatch");
  console.log(`wrote /output/entry.txt (${text.length} characters)`);
  console.log(text);
}

main();
