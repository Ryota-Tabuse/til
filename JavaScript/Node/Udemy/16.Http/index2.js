var http = require("http");

var server = http.createServer();

server.on("request", (request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World 2.");
});
server.listen(3000);