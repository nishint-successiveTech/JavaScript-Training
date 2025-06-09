//4.  Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

function deepClone(obj){
    return structuredClone(obj) //This is inbult javascript function to make a deep copy
}

const obj={
    name:"Nishint",
    information:{
    age:22,
    cgpa:9.1,
    techStack:["SpringBoot","MERN"]
    }
}

const deepCopy=deepClone(obj)
console.log(deepCopy)




