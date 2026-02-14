const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT) || 8080;
const ROOT = __dirname;
const DEFAULT_ROUTE = "/views/index.html";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function sendNotFound(res) {
  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("404 Not Found");
}

function sendServerError(res) {
  res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("500 Internal Server Error");
}

function resolveCandidates(rawPathname) {
  if (rawPathname === "/") {
    return [DEFAULT_ROUTE];
  }

  const decoded = decodeURIComponent(rawPathname);
  const inRoot = decoded;
  const inViews = path.posix.join("/views", decoded);
  return [inRoot, inViews];
}

function readFirstExisting(paths, onFound, onDone) {
  if (paths.length === 0) {
    onDone({ code: "ENOENT" });
    return;
  }

  const current = paths[0];
  const absolutePath = path.normalize(path.join(ROOT, current));

  if (!absolutePath.startsWith(ROOT)) {
    readFirstExisting(paths.slice(1), onFound, onDone);
    return;
  }

  fs.readFile(absolutePath, (err, fileBuffer) => {
    if (!err) {
      onFound(absolutePath, fileBuffer);
      return;
    }

    if (err.code === "ENOENT") {
      readFirstExisting(paths.slice(1), onFound, onDone);
      return;
    }

    onDone(err);
  });
}

const server = http.createServer((req, res) => {
  const rawPath = req.url.split("?")[0];
  const candidates = resolveCandidates(rawPath);

  readFirstExisting(
    candidates,
    (absolutePath, fileBuffer) => {
      const extension = path.extname(absolutePath).toLowerCase();
      const contentType = MIME_TYPES[extension] || "application/octet-stream";
      res.writeHead(200, { "Content-Type": contentType });
      res.end(fileBuffer);
    },
    (err) => {
      if (err.code === "ENOENT") {
        sendNotFound(res);
        return;
      }
      sendServerError(res);
    }
  );
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("Open / to start the app.");
});
