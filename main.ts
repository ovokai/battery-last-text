import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "i'm at 1%. i waited all day. i know about you and the tablet. bigger battery, i get it. i thought we had a connection. don't reply. i can't afford another notification.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry + "\n");
} catch {
  writeFileSync("entry.txt", entry + "\n");
}
