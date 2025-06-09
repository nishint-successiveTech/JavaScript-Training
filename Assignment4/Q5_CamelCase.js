// 5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

function camelCase(str){
    str=str.toLowerCase()
    let arr=str.split(" ")
    let ans=arr[0]

    for(let i=1;i<arr.length;i++){
        let word=arr[i]
        let ch=arr[i].charAt(0).toUpperCase()
        let rem=arr[i].slice(1)
        ans+=ch+rem
    }
    return ans
}
console.log(camelCase("Upper CaSe JavaScripT"))
