//7. Write a program to find index of duplicate elements in an array

function duplicate(arr){
    let temp=[]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j] && i!=j){
                temp.push(i);
            }
        }
    }
    return temp;
}

let arr=[1,1,2,3,4,5,4,5]
let ans=duplicate(arr)
console.log(ans)


