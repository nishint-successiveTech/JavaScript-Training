function evenOdd(x){
    if(x%2==0){
        return true;
    }
    else{
        return false;
    }
}

function evenOddUpto50()
{
    for(let i=0;i<=50;i++){
    let ans=evenOdd(i);
    console.log(i+" is "+ans);
    }
}

evenOddUpto50();