//10. Write a program to concatenate an input of array of arrays

function concatOfArray(arr2D){
    let ans=[]
    for(let value of arr2D){
        for(let elem of value){
            ans.push(elem)
        }
    }
    return ans
}
let arr2D=[[1,2,3],[3,2,1],[1,1]]
console.log(concatOfArray(arr2D))