var http　= require("http");
var server = http.createServer();

server.on("request", (request, response) => {

    //レスポンスの生成
    var data = "Hello World";
    response.writeHead(200,{"Content-Type": Buffer.byteLength(data)});
    response.write(data, "utf8");
    response.end();
});
server.listen(3000);