// 2. Give an example of using multiple callback functions in a single function in JavaScript

function callback2(data,green,red){
console.log(data)
green(data)
red(data)
}

function colorChangedToRed(data){
console.log(data,"Color changed to red")
}

function colorChangedToGreen(data){
console.log(data,"Color changed to green")
}

let str="Hello"
callback2(str,colorChangedToGreen,colorChangedToRed)

