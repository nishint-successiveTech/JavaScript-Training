function printFibonaaci(n)
{
    let dp=new Array(n)
    dp[0]=0;
    console.log(dp[0])
    
    dp[1]=1;
    console.log(dp[1])

    for(let i=2;i<=n;i++)
    {
        dp[i]=dp[i-2]+dp[i-1]
        console.log(dp[i])
    }
}

console.log("Printing All Fibonaaci Series")
printFibonaaci(10)