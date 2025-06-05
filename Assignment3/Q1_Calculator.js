// 1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)

function calculator(num1,num2,operation){
    
    switch(operation)
    {
        case '+':result=num1+num2
        break;
        case '-':result= num1-num2
        break;
        case '*':result= num1*num2
        break;
        case "/":result= num1/num2
        break;
        default: result="Invalid Operation"
    }
    return result;
}

let div=calculator(10,2,'/')
let multi=calculator(10,2,'*')
let add=calculator(10,100,'+')
let sub=calculator(10,8,'-')

console.log("The ans of multiply is",multi);
console.log("The ans of divide is",div);
console.log("The ans of add is",add);
console.log("The ans of substraction is",sub);