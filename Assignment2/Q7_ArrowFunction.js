
//Question 3

let ArgumentTakingFunction= (passing)=>{passing()}

let hello=()=>{
    console.log("Hello Nishint");
}

ArgumentTakingFunction(hello);

//Question 4
let square=(num)=>{return num*num}

for(let i=0;i<=100;i++)
{
    console.log("Square of",i,"is",square(i));
}

//Question 5

let sum=(first,second)=>{return first+second};
console.log(sum(Number(100),Number(200)));

//Question 6
let evenOdd=(num)=>{ 
        if(num%2==0)
            {return true}  
        else 
            {return false} 
    }

for(let i=0;i<=100;i++)
{
    console.log(i,"is");
    evenOdd(i);
}


