class hello{
    hey(){
        console.log("from hello class")
    }
}

class hello2 extends hello{
    constructor(){
        super()
        console.log("inside constructor")
    }
    main(){
        console.log("inside the hello2 class")
    }
}

ob1=new hello2()
ob1.hey()
ob1.main()