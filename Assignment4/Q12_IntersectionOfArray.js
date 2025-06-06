// 12. Write a program to display intersection of two array
let arr1=[1,2,3,4]
let arr2=[2,3,3]

let set1=new Set()
let set2=new Set()
let set3=new Set()

for(let i=0;i<arr1.length;i++){
    set1.add(arr1[i])
}
for(let i=0;i<arr2.length;i++){
    set2.add(arr2[i])
}
for(let value of set1){
    if(set2.has(value)){
        set3.add(value)
    }
}

console.log(set3)

















