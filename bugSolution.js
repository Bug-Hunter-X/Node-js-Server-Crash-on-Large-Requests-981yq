const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      // Process the request body here. Example: save to file.
      fs.writeFile('largeFile.txt', body, err => {
        if (err) {
          console.error(err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error processing request');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('File uploaded successfully');
        }
      });
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
}).listen(3000);