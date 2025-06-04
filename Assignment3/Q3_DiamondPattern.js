function diamondPattern(n)
{
    for(let i=1;i<=n;i++)
        {
            for(let k=n;k>i;k--)
            {
            process.stdout.write(String(" "))
            }
            for(let j=1;j<=i;j++)
            {
            process.stdout.write(String("* "))
            }
            console.log();
        }

    for(let i=n;i>=1;i--)
    {
        for(let k=n+1;k>i;k--)
        {
        process.stdout.write(String(" "))
        }
        for(let j=1;j<i;j++)
        {
        process.stdout.write(String("* ")) 
        }
        console.log();


    }
}

diamondPattern(5)