var read=require("readline-sync")
var input=read.question("enter the digit")
var input2=read.question('enter the second digit')
if(input>input2){
    console.log("first larger")
}
else if(input===input2){
    console.log("equal")
}
else{
    console.log("second larger")
}
console.log(input)