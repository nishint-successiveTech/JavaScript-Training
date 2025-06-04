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

let div=calculator(10,0,'/')
let multi=calculator(10,0,'*')
let add=calculator(10,0,'+')
let sub=calculator(10,0,'-')

console.log(ans);