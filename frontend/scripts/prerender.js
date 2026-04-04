#!/usr/bin/env node
/**
 * Cross-platform react-snap pre-render script.
 * On macOS dev machines, uses system Chrome for modern JS support.
 * On Linux (Render build servers), uses the bundled Chromium from puppeteer.
 */
const { run } = require("react-snap");
const os = require("os");
const fs = require("fs");

const options = {
  source: "dist",
  minifyHtml: {
    collapseWhitespace: false,
    removeComments: false,
  },
  puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
  crawl: false,
  include: [
    "/",
    "/blogs",
    "/about-us",
    "/contact-us",
    "/about-maram/culture",
    "/about-maram/village",
    "/about-maram/festival",
    "/about-maram/education",
    "/about-maram/maram-union",
    "/about-maram/mks",
    "/about-maram/news",
    "/resources/scholarship",
    "/resources/career-guidance",
    "/disclaimer",
    "/privacy-policy",
  ],
};

// On macOS, prefer system Chrome for better JS compatibility
if (os.platform() === "darwin") {
  const macChrome =
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  if (fs.existsSync(macChrome)) {
    options.puppeteerExecutablePath = macChrome;
  }
}

run(options).catch((err) => {
  console.warn("[prerender] react-snap encountered errors:", err.message);
  // Non-zero exit is OK — Render build should still succeed
  process.exit(0);
});
