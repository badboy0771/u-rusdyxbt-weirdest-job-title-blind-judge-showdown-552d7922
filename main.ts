// Weirdest Job Title: Blind Judge Showdown — one job title.
// Writes the title to /output/entry.txt after checking the gate:
// UTF-8 text, 1-60 characters, a single line, no surrounding whitespace.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "Senior Apologizer for Angry Vending Machines";

const MAX_CHARS = 60;

function main(): void {
  const text = ENTRY.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, must be 1-${MAX_CHARS}`);
  }
  if (text !== ENTRY || /\n/.test(text)) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  const back = readFileSync("/output/entry.txt", "utf8");
  if (back !== text) throw new Error("read-back mismatch");
  console.log(`wrote /output/entry.txt (${text.length} characters)`);
  console.log(text);
}

main();
