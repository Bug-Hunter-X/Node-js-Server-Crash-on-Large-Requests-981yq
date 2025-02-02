const http = require('http');

const server = http.createServer((req, res) => {
  // The following line might throw an error if the request is very large
  const body = [];
  req.on('data', chunk => body.push(chunk));
  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    // Process the request body here
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  });
}).listen(3000);