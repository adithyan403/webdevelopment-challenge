var http=require("http")
var readhtml=require("fs")
var url=require("url")




http.createServer(function (request,response){
    var q=url.parse(request.url,true)   // this true is passed to get the data as an object
    

    if(q.pathname==="/welcome"){
        readhtml.readFile("html.html",function(err,data){
            response.writeHead(200,{"Content-Type":"text/html"})
            response.write(data)
            response.end()
        }) 
    }
    else if(q.pathname==="/login"){
        readhtml.readFile("login page.html",function(err,data){
            response.writeHead(200,{"Content-Type":"text/html"})
            response.write(data)
            response.end()
        })
        
        
    }
    else if(q.pathname==="/loginaction"){
        response.write("login successfull")
        response.write(q.query.username)
        console.log("login successfull")
        console.log(q.query)
        response.end()

    }
    else{
        response.writeHead(404,{"Content-Type":"text/html"})
        response.write("error")
        response.end()
    }
}).listen(799,function(){
    console.log("server started")
})