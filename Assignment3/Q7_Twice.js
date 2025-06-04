//7. Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)

function twice(start,end)
{
    for(let i=start;i<=end;i++)
    {
        console.log("Twice of",i,"is",i*2);
    }
}

twice(2,4096)