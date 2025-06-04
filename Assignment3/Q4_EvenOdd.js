// 4. Write a program to print all even number first and then all odd numbers
function evenOdd(lastnum){
    console.log("Printing All Even's")
    for(let i=0;i<=lastnum;i=i+2)
    {
        console.log(i)
    }

    console.log("Printing All Odd's")
    for(let i=1;i<=lastnum;i=i+2)
    {
            console.log(i)
    }
}

evenOdd(50)
