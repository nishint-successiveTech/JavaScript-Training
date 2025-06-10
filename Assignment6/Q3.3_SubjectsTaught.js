// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    farewell(){
        console.log(`GoodBye ${this.name} ThankYou for everything`)
    }
}
class Teacher extends Person{
    constructor(name,age,subjectsTaught){
        super(name,age)
        this.subjectsTaught=subjectsTaught
    }
    farewell(){
        super.farewell()
        console.log(`He taught ${this.subjectsTaught}`)
    }
}

let obj=new Teacher("Raj",39,"Computer Science")
obj.farewell()