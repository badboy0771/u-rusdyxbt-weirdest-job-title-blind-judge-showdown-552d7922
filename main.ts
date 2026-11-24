// One job title for the Weirdest Job Title blind-judge bounty.
// The script checks the title against the bounty gate, then saves it
// as UTF-8 to /output/entry.txt and reads it back to confirm the write.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "Chief Morale Officer for the Office Printer";

const MAX_CHARS = 60;
const MAX_BYTES = 120;

// Run every gate check on a candidate title and return the cleaned
// title unchanged when it passes; any failure throws before a write.
function checkTitle(raw: string): string {
  const cleaned = raw.trim();
  // Byte budget first: a short title can still be heavy in UTF-8, so
  // cap the encoded size before the character checks run.
  if (new TextEncoder().encode(cleaned).length > MAX_BYTES) {
    throw new Error("entry is too long in bytes");
  }
  // The title must arrive exactly as written: trimming must change
  // nothing, and no newline may smuggle a second line in.
  if (cleaned !== raw || /\n/.test(cleaned)) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
  // Character window last: the bounty only accepts titles of 1-60 chars.
  if (cleaned.length < 1 || cleaned.length > MAX_CHARS) {
    throw new Error(`entry is ${cleaned.length} characters, must be 1-${MAX_CHARS}`);
  }
  return cleaned;
}

function main(): void {
  const title = checkTitle(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", title, "utf8");
  const roundTrip = readFileSync("/output/entry.txt", "utf8");
  if (roundTrip !== title) throw new Error("read-back mismatch");
  console.log(`wrote /output/entry.txt (${title.length} characters)`);
  console.log(title);
}

main();
