class hello{
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
        
    }
    hello2(){
        console.log(this.num1+this.num2)
    }
}

ob1=new hello(34,56)
ob1.hello2()