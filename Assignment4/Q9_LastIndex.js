//9. Write a program to find the last duplicate index in an array

function duplicate(arr){
    let set=new Set();
    let temp=[]
    for(let i=0;i<arr.length;i++){
        flag=false
        if(set.has(arr[i])==false){
        set.add(arr[i])
        for(let j=arr.length-1;j>i;j--){
            if(arr[j]==arr[i]){
                temp.push(j)
                flag=true
                break;
            }
        }
    }
 }

 return temp;
}

let arr=[1,2,3,4,1,2,3,4,4,9,9,10]
let set=new Set()

for(let i=0;i<arr.length;i++){
    set.add(arr[i])
}
let arr2=duplicate(arr)
let p=0;

for(let value of set){
console.log("The last index of "+value+" is "+(arr2[p++] ||-1))
}





