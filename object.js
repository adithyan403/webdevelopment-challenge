var ob={name:"adithyan",age:18,job:"software engineer",fu:function hello(){
    console.log("inside object function"+this.job)
}}
ob.hobby="coding"
for(i in ob){
    console.log(ob[i])
}
ob.fu()