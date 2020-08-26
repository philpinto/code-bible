
var http = require("http");

var PORT_ONE = 3000;

function handleRequest(request, response) {

 
  response.end("YAHHHHHHHHHHH YEEEEEEET " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT_ONE, function() {


  console.log("Server listening on: http://localhost:" + PORT_ONE);
});

///////////////////////////////////////////////////////////////////////////////////


var http = require("http");

var PORT_TWO = 8080;

function handleRequest2(request, response) {

 
  response.end("YAHHHHHHHHHHH SKEEEEEEET " + request.url);
}

var server = http.createServer(handleRequest2);

server.listen(PORT_TWO, function() {


  console.log("Server listening on: http://localhost:" + PORT_TWO);
});