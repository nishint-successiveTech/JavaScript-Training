
function isPrime(x)
{
    let count=0;
    for(let i=1;i<=Math.sqrt(x);i++)
    {
        if(x%i==0)
        {
            count++;
        }
    }

    if(count>1)
    return false
    return true 
}

function primeNumber(lastnum){
    for(let i=2;i<=50;i++)
    {
        let ans=isPrime(i)
        if(ans==true)
        {
            console.log(i);
        }
    }
}

console.log("All Prime Numbers ")
primeNumber(50)

