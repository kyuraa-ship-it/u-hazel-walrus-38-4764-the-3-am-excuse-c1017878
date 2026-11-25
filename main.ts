import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "At 3 AM I'm not a wallet, I'm a night watchman — and the first rule of the night shift is: no signatures while the moon is the only witness.";

// Gate: UTF-8 text, 1-200 chars, single non-blank line.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry fails gate: " + ENTRY.length + " chars");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY.length + " chars");
