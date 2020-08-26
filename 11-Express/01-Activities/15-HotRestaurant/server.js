
var http = require("http");

var PORT = 3000;

function handleRequest(request, response) {

  
  response.end("Listening at port" + PORT + request.url);
}

var server = http.createServer(handleRequest);


server.listen(PORT, function() {

 
  console.log("Server listening on: http://localhost:" + PORT);
});
