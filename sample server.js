var http=require("http")
var readhtml=require("fs")
http.createServer(function (request,response){
    readhtml.readFile("html.html",function(err,data){
        response.writeHead(200,{"Content-Type":"text/html"})
        response.write(data)
        response.end()
    })
}).listen(799)

function server(reqest,response){
    readhtml.readFile("html.html",function(err,data){
        response.writeHead(200,{"Content-Type":"text/html"})
        response.write(data)
        response.end()
    })
}