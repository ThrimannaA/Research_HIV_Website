import { createServer } from 'http';
import { readFileSync } from 'fs';
import { resolve, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PORT = process.env.PORT || 5000;

// Simple production server
const server = createServer((req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url;
  
  try {
    // Try to serve the file from the dist directory
    const filePath = join(__dirname, 'dist', url);
    const content = readFileSync(filePath);
    
    // Set the content type based on file extension
    const ext = url.split('.').pop();
    const contentType = {
      'html': 'text/html',
      'css': 'text/css',
      'js': 'application/javascript',
      'json': 'application/json',
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'svg': 'image/svg+xml',
      'ico': 'image/x-icon'
    }[ext] || 'text/plain';
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (e) {
    // If the file doesn't exist, serve index.html (for SPA routing)
    try {
      const content = readFileSync(join(__dirname, 'dist', 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    } catch (err) {
      res.writeHead(500);
      res.end('Internal Server Error');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 