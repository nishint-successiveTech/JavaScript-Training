// 1
// 2 2
// 3 3 3
// 4 4 4 4

function pattern(rows)
{
    for(let i=1;i<=rows;i++)
    {
        let j=0;
        while(j<i)
        {
            process.stdout.write(String(i)+" ")
            j++;
        }
        console.log()
    }
}

pattern(4)