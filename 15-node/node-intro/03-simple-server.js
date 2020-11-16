const http = require('http'); // Node standard library

http.createServer((req, res) => {
  // This callback function runs every time a request hits the server.
  console.log(`Serving request: ${ req.method } ${ req.url }`); // logging

  // This is terribly tedious:
  if (req.url === '/groucho') {
    res.end('Hello from Groucho');
  } else if (req.url === '/harpo') {
    res.end('Hello from Harpo');
  } else {
    res.end('Hello from nobody in particular'); // catch all
  }

}).listen(1337); // Elite

console.log('Server is running at http://localhost:1337');
