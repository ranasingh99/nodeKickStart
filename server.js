var server = require('http');
server.createServer(engion).listen(3000)

function engion(request,response){
    response.writeHead(200,{'content-type':'text/plain'})
    response.end('Hey there, from server')
}