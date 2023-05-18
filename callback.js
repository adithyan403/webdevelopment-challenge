var hello=function(data){
    console.log(data)
}

var call=function(callback){        ///this second function makes the first function to be called by passing the appropriate arguments

    callback("welcome")
}   

call(hello)
