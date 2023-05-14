function contruct(name,place,age){
    this.name=name
    this.age=age
    this.place=place
    this.method=function hello(){
        console.log(this.name)
    }
}
var ob1=new contruct("adit","kottayam",18)
ob1.method()
