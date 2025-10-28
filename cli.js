#!/usr/bin/env node
import { open, close } from "./index.js";

const [,, cmd, browser, arg] = process.argv;

if (!cmd) {
  console.log(`
Usage:
  browser-controll open <browser> <url>   - Open browser with URL
  browser-controll close <browser>        - Close browser

Examples:
  browser-controll open safari https://example.com
  browser-controll close safari
`);
  process.exit(0);
}

try {
  switch (cmd) {
    case "open":
      if (!browser || !arg) throw new Error("Usage: browser-controll open <browser> <url>");
      open(browser, arg);
      console.log(`✅ Opened ${browser}: ${arg}`);
      break;
    case "close":
      if (!browser) throw new Error("Usage: browser-controll close <browser>");
      close(browser);
      console.log(`✅ Closed ${browser}`);
      break;
    default:
      console.error(`Unknown command: ${cmd}`);
  }
} catch (err) {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
}
