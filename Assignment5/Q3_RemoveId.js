//3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

let obj=[
    {
        name:"Nishint",
        age:22,
        id:1
    },
    {
        name:"Yash",
        age:29,
        id:2
    },
    {
        name:"Vijay",
        age:40,
        id:3
    }
]

obj.forEach(ele=>{delete ele.id})
console.log(obj)




