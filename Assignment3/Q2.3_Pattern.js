// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function pattern(n)
{
    for(let i=0;i<n;i++)
    {
        for(let j=1;j<=n-i;j++)
        {
        process.stdout.write(String(j)+" ");
        }
        console.log();
    }

    for(let i=2;i<=n;i++)
    {
        for(let j=1;j<=i;j++)
        {
        process.stdout.write(String(j)+" ");
        }
        console.log();
    }
}


pattern(5)