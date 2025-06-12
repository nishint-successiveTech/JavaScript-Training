// 3. Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

function fetchDataPromise(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data Feteched Successfully")
        },1000)
    })
}
let url="https://api.github.com/users/nishint-successiveTech"
fetchDataPromise(url).then(data=>console.log(data))


