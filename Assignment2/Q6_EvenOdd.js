function evenOdd(x)
{
if(x%2==0)
{
    console.log("Number is Even: ",x);
    return;
}
console.log("Number is Odd: ", x);
}

for(let i=0;i<=50;i++)
{
    evenOdd(i);
}