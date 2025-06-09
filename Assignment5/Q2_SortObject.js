// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

let obj=[
    {name:"Nishint",age: 22},
    {name:"Raj",age: 21},
    {name:"Ram",age: 30},
    {name:"Krishna",age: 28},
    {name:"Shiva",age: 40}
]

obj.sort((a,b)=>a.age-b.age)
console.log(obj)