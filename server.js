import express from "express";
import { open, close } from "browser-controll";

const app = express();
app.use(express.json());

// ✅ Open browser
app.post("/open", (req, res) => {
  const { browser, url } = req.body;
  if (!browser || !url)
    return res.status(400).json({ error: "Missing browser or url" });

  try {
    open(browser, url);
    res.json({ success: true, message: `Opened ${browser} with ${url}` });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Close browser
app.post("/close", (req, res) => {
  const { browser } = req.body;
  if (!browser)
    return res.status(400).json({ error: "Missing browser" });

  try {
    close(browser);
    res.json({ success: true, message: `Closed ${browser}` });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Browser Controll API is running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
