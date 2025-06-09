// 8. Write a program to remove duplicate elements from an array

function removeDuplicate(arr){
    let temp=[]
    for(let i=0;i<arr.length;i++){
        if(temp.includes(arr[i])==false){
            temp.push(arr[i])}
    } 
    return temp  
}

let arr=[1,1,1,1,1,2,2,2,2,2,4,5]
console.log(removeDuplicate(arr))

