//5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//     a: 1,
//     b: { c: 2, d: [3, 4] }
//  };
//  Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

function flattenObject(obj){
    let ans={}
    for(let key in obj){
        if(typeof(obj[key])=="object"){
            let tempObj=flattenObject(obj[key])
            for(let j in tempObj){
                ans[key+"."+j]=tempObj[j]
            }
        }
        else{
            ans[key]=obj[key]
        }
    }
    return ans
}
const obj = {
    a: 1,
    b: { c: 2, d: [3, 4] }
}
console.log(flattenObject(obj))



