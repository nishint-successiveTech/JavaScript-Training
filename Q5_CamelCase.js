// 5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)
function camelCase(str){
    str=str.trim()
    let ans=""
    let arr=str.split(" ")
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            let ch=arr[i].charAt(j)
            if(i==0){
                ans+=ch
            }
            else if(j==0){
                let ascll=ch.charCodeAt(0)
                if(ascll>=97 && ascll<=122){
                let bigger=String.fromCharCode(ascll-32)
                ans+=bigger;
                }
                else{
                    ans+=ch
                }
            }
            else{
                let ascll=ch.charCodeAt(0)
                if(ascll>=65 && ascll<=90){
                let bigger=String.fromCharCode(ascll+32)
                ans+=bigger
                }
                else{
                ans+=ch}
            }
        }
    }
    return ans
}
