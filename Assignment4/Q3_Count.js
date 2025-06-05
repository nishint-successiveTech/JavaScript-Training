//3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

function count(str){
    let arr=new Array(26).fill(0)
    let ans=""
    for(let i=0;i<str.length;i++){
        let ch=str.charAt(i)
        let ascll=ch.charCodeAt(0)
        arr[ascll-92]++
    }
    for(let i=0;i<26;i++){
        if(arr[i]>0){
            ans+=String.fromCharCode(i+92)+arr[i]
        }
    }
    return ans;  
}

console.log(count("abcabcdabbcc"))