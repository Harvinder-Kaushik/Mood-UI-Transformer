const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
  // Remove query parameters
  const url = new URL(req.url, `http://${req.headers.host}`).pathname;
  
  // Serve index.html for root path
  let filePath = url === '/' ? '/index.html' : url;
  filePath = path.join(PUBLIC_DIR, filePath);

  // Prevent directory traversal attacks
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  // Try to serve the file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // Serve index.html for any non-found routes (SPA behavior)
      fs.readFile(path.join(PUBLIC_DIR, 'index.html'), (err, content) => {
        res.writeHead(err ? 404 : 200, {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache'
        });
        res.end(content || 'Not Found');
      });
      return;
    }

    // Determine content type
    const ext = path.extname(filePath).toLowerCase();
    const contentTypes = {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.js': 'application/javascript; charset=utf-8',
      '.json': 'application/json; charset=utf-8',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.woff': 'font/woff',
      '.woff2': 'font/woff2'
    };

    const contentType = contentTypes[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'max-age=86400'
    });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Mood UI Transformer server running at http://localhost:${PORT}`);
});
