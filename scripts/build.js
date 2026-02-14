const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");

function removeDir(target) {
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
  }
}

function ensureDir(target) {
  fs.mkdirSync(target, { recursive: true });
}

function copyDirContents(sourceDir, destinationDir) {
  ensureDir(destinationDir);
  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const destinationPath = path.join(destinationDir, entry.name);

    if (entry.isDirectory()) {
      copyDirContents(sourcePath, destinationPath);
      continue;
    }

    fs.copyFileSync(sourcePath, destinationPath);
  }
}

removeDir(DIST);
ensureDir(DIST);

copyDirContents(path.join(ROOT, "views"), DIST);
copyDirContents(path.join(ROOT, "assets"), path.join(DIST, "assets"));

console.log("Build complete: dist/ is ready for deployment.");
