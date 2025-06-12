//1. Write a program to iterate over object.

let obj={
    name:"Nishint Goyal",
    age:22,
    dateOfBirth:"22 March 2003",
    pastInternship:"DRDO",
    techStacks:"Java and Spring Boot",
    cgpa:9.1
}

for(let k in obj){
    console.log(`The ${k} is: ${obj[k]}`)
}

