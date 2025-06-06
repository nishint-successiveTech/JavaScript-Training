// 6. Write a program to find sum of an array

function sumOfArray(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i]
    }
    return total;
}

let arr=[1,3,2,55,3442,55,332,6643,100]
console.log(sumOfArray(arr))

