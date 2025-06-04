// 8. Write a program to dispaly number from 1-20 using all types of loops


function forLoop(start,end)
{
    for(let i=start;i<=end;i++)
    {
        console.log(i)
    }
}

function whileLoop(start,end)
{
    while(start<=end)
    {
        console.log(start++)
    }
}

function doWhileLoop(start,end)
{
    do{
        console.log(start++)
    }
    while(start<=end)
}

console.log("Printing using for")
forLoop(1,20)

console.log("Printing using while")
whileLoop(1,20)

console.log("Printing using doWhile")
doWhileLoop(1,20)