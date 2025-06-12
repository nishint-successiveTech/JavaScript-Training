// 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.

class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
    }
    fullName(){
        return `${this.firstName}${this.lastName}`
    }
    
    averageAge(person){
        let total=0
        let count=0;
        for(let key of person){
            count++;
            for(let key2 in key){
                if(key2=="age"){
                    total+=key[key2]
                }
            }
        }
        total=total/count;
        return total;
    }
}

let person=[
    {
        name:"Raj",
        age:22
    },
    {
        name:"Yash",
        age:90
    },
    {
        name:"Hardik",
        age:84
    }
]


let obj=new Person("Nishint","Goyal",22)
console.log("Full Name of Student is ",obj.fullName())
console.log("Average Age of all people is ",obj.averageAge(person))



