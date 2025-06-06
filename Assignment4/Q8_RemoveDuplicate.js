// 8. Write a program to remove duplicate elements from an array

function removeDuplicate(){
    let set=new Set()

    for(let i=0;i<arr.length;i++){
        set.add(arr[i])
    }
    return set
}

let arr=[1,1,1,1,1,2,2,2,2,2]
console.log(removeDuplicate(arr))

