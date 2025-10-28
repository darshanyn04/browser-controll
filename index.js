// import { execSync } from "child_process";

// /**
//  * Open a browser with the given URL
//  */
// export function open(browser, url) {
//   if (!browser) throw new Error("Browser name required");
//   if (!url) throw new Error("URL required");

//   let script = "";

//   switch (browser.toLowerCase()) {
//     case "safari":
//       script = `osascript -e 'tell application "Safari" to open location "${url}"'`;
//       break;
//     case "chrome":
//       script = `osascript -e 'tell application "Google Chrome" to open location "${url}"'`;
//       break;
//     case "firefox":
//       script = `open -a "Firefox" "${url}"`;
//       break;
//     default:
//       throw new Error(`Unsupported browser: ${browser}`);
//   }

//   execSync(script);
// }

// /**
//  * Close a browser completely
//  */
// export function close(browser) {
//   if (!browser) throw new Error("Browser name required");

//   let script = "";

//   switch (browser.toLowerCase()) {
//     case "safari":
//       script = `osascript -e 'tell application "Safari" to quit'`;
//       break;
//     case "chrome":
//       script = `osascript -e 'tell application "Google Chrome" to quit'`;
//       break;
//     case "firefox":
//       script = `osascript -e 'tell application "Firefox" to quit'`;
//       break;
//     default:
//       throw new Error(`Unsupported browser: ${browser}`);
//   }

//   execSync(script);
// }
import { execSync } from "child_process";

/**
 * Open a browser with the given URL (visible window)
 */
export function open(browser, url) {
  if (!browser) throw new Error("Browser name required");
  if (!url) throw new Error("URL required");

  let command = "";

  switch (browser.toLowerCase()) {
    case "safari":
      command = `open -a "Safari" "${url}"`;
      break;
    case "chrome":
      command = `open -a "Google Chrome" "${url}"`;
      break;
    case "firefox":
      command = `open -a "Firefox" "${url}"`;
      break;
    default:
      throw new Error(`Unsupported browser: ${browser}`);
  }

  execSync(command);
}

/**
 * Close a browser completely
 */
export function close(browser) {
  if (!browser) throw new Error("Browser name required");

  let script = "";

  switch (browser.toLowerCase()) {
    case "safari":
      script = `osascript -e 'tell application "Safari" to quit'`;
      break;
    case "chrome":
      script = `osascript -e 'tell application "Google Chrome" to quit'`;
      break;
    case "firefox":
      script = `osascript -e 'tell application "Firefox" to quit'`;
      break;
    default:
      throw new Error(`Unsupported browser: ${browser}`);
  }

  execSync(script);
}
