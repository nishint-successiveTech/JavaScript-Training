//3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.

class Person{
    constructor(name,age,gender,interests){
        this.name=name;
        this.age=age
        this.gender=gender
        this.interests=interests
    }
    greeting(){
        console.log(`Hello everyone my name is ${this.name}`)
        console.log(`My age is ${this.age}`)
        console.log(`My gender is ${this.gender}`)
        console.log(`My interestes is ${this.interests}`)
    }
    farewell(){
        console.log(`GoodBye ${this.name} ThankYou for everything`)
    }
}
const objPerson=new Person("Raj",22,"Male","Chess and Cricket")
objPerson.greeting()
objPerson.farewell()
