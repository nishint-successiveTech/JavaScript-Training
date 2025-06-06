// 13. Write a program to return inverse of an array
function inverseOfArray(arr){
    let arr2=[]
    for(let i=0;i<arr.length;i++){
        arr2[arr[i]]=i
    }
    return arr2;
}

let arr=[1,3,0,2]
console.log(inverseOfArray(arr))

