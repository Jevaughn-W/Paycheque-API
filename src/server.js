// Server start-up dependencies
const PORT = 8080;
const http = require('http');
const server = http.createServer(function(request, response) {
  response.writeHead(200, 
    {"Content-Type": "text/plain"});
    
  response.end("Hello World\n");
  });


  server.listen(PORT);
  console.log(`Listening on port ${PORT}`);
