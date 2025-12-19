const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Paths
const ROOT_DIR = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");
const TEMPLATE_PATH = path.join(SRC_DIR, "template.html");
const CSS_INPUT_PATH = path.join(SRC_DIR, "input.css");
const CSS_OUTPUT_TEMP_PATH = path.join(ROOT_DIR, "style.css"); // Temp file
const JS_HEAD_PATH = path.join(SRC_DIR, "js", "head.js");
const JS_MAIN_PATH = path.join(SRC_DIR, "js", "main.js");
const OUTPUT_PATH = path.join(ROOT_DIR, "theme.html");

// 1. Build Tailwind CSS
console.log("Building Tailwind CSS...");
try {
  execSync(
    `npx tailwindcss -i "${CSS_INPUT_PATH}" -o "${CSS_OUTPUT_TEMP_PATH}" --minify`,
    {
      cwd: ROOT_DIR,
      stdio: "inherit",
    }
  );
} catch (error) {
  console.error("Tailwind build failed:", error);
  process.exit(1);
}

// 2. Read Files
console.log("Reading source files...");
let template = fs.readFileSync(TEMPLATE_PATH, "utf-8");
const css = fs.readFileSync(CSS_OUTPUT_TEMP_PATH, "utf-8");
const jsHead = fs.readFileSync(JS_HEAD_PATH, "utf-8");
const jsMain = fs.readFileSync(JS_MAIN_PATH, "utf-8");

// 3. Inject Content
console.log("Injecting content...");

// Inject CSS
template = template.replace("/* INJECT_CSS */", css);

// Inject Head JS
template = template.replace("/* INJECT_HEAD_JS */", jsHead);

// Inject Main JS
template = template.replace("/* INJECT_MAIN_JS */", jsMain);

// 4. Write Output
console.log(`Writing output to ${OUTPUT_PATH}...`);
fs.writeFileSync(OUTPUT_PATH, template);

console.log("Build complete! theme.html is ready.");
