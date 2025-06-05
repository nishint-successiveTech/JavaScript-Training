// 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")
function reverseString(str){
    let ans="";
    let arr=str.split(" ");

    for(let i=0;i<arr.length;i++){
        for(let j=arr[i].length-1;j>=0;j--){
            ans+=arr[i].charAt(j);
        }
        ans+=" "
    }
    return ans
}
console.log(reverseString("Hello John"))