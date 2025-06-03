

let prev=-1;

function randomNumberGen()
{   
    let random=Math.random();
    let digit=(random*10) + 1;
    let ans=Math.floor(digit);
    
    return ans;
} 


// let num=Number(prompt("Enter how many times you want to run the loop: "));
let num=100;

for(let i=0;i<num;i++)
{
console.log("Your Random Number is :");

let x=randomNumberGen();
if(x!=prev)
{
prev=x;
console.log(x);
}
else
{
    let x2=randomNumberGen();

    while(x2==prev)
    {
        x2=randomNumberGen();   
    }

    prev=x2;

    console.log(x2); 
}

}


