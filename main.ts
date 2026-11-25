// makefun-apology-oneliner: writes one apology line to /output/entry.txt.
// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I deleted your wedding photos. Your mother-in-law has the only copies now, and she knows it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
