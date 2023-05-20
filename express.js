const exp=require("express")
const path=require("path")

var app=exp()
app.use(function(req,res,next){
    console.log("request send")
    next()
})



//startin express
app.get("/",function(req,res,next){
    res.sendFile(path.join(__dirname,"html.html"))
    next()
})
app.use(function(req,res,next){
    console.log("went to login page")
    next()
})
app.get("/login",function(req,res){
    res.sendFile(path.join(__dirname,"login page.html"))
})
app.post("/loginaction",function(req,res){
    res.send("login successfull")
})
app.listen(7000,function(){
    console.log("server started")
})