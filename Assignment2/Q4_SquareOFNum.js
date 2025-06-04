function square(num){
    let square= num*num; //another method num**2
    return square;
}

function squareUpto100(){
   for(let i=0;i<=100;i++){
    let temp=square(i);
    console.log("Square of ",i,"is",temp)
    }
}

squareUpto100();
