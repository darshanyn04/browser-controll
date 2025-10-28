#!/usr/bin/env node
import { open, close } from "./index.js";
import express from "express";

const args = process.argv.slice(2);
const cmd = args[0];

async function startAPI() {
  const app = express();
  app.use(express.json());

  app.post("/open", (req, res) => {
    const { browser, url } = req.body;
    if (!browser || !url) return res.status(400).send("Missing params");
    try {
      open(browser, url);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post("/close", (req, res) => {
    const { browser } = req.body;
    if (!browser) return res.status(400).send("Missing browser");
    try {
      close(browser);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, "0.0.0.0", () =>
    console.log(`🚀 API listening on port ${PORT}`)
  );
}

if (cmd === "open") {
  const [browser, url] = [args[1], args[2]];
  open(browser, url);
  console.log(`✅ Opened ${browser}: ${url}`);
} else if (cmd === "close") {
  const [browser] = [args[1]];
  close(browser);
  console.log(`✅ Closed ${browser}`);
} else if (cmd === "serve" || cmd === "api") {
  startAPI();
} else {
  console.log(`
Usage:
  browser-controll open <browser> <url>   - Open browser with URL
  browser-controll close <browser>        - Close browser
  browser-controll serve                  - Start API server
`);
}
