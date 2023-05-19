var http=require("http")
var readhtml=require("fs")




http.createServer(function (request,response){
    if(request.url==="/"){
        readhtml.readFile("html.html",function(err,data){
            response.writeHead(200,{"Content-Type":"text/html"})
            response.write(data)
            response.end()
        }) 
    }
    else if(request.url==="/login"){
        readhtml.readFile("login page.html",function(err,data){
            response.writeHead(200,{"Content-Type":"text/html"})
            response.write(data)
            response.end()
        })
        
        
    }
    else{
        response.writeHead(404,{"Content-Type":"text/html"})
        response.write("error")
        response.end()
    }
}).listen(799,function(){
    console.log("server started")
})