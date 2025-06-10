// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    greeting(){
        console.log(`Name of person is ${this.name}`)
        console.log(`Age is ${this.age}`)
    }
}
class Student extends Person{
    constructor(name,age,studies){
        super(name,age)
        this.studies=studies
    }
    greeting(){
        super.greeting()
        console.log(`He is studying ${this.studies}`)
    }
}

let objStudent=new Student("Nishint",22,"Computer Science")
objStudent.greeting()

