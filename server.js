var http = require('http');
const { type } = require('os');
var server = http.createServer(engion)
server.listen(3000,function(){
    console.log('srver was hit by a request')
})

function engion(request,response){

    response.writeHead(200,{'content-type':'text/plain'})
    response.end('Hey there from the server'+ request.url)
  //console.log(response)
}