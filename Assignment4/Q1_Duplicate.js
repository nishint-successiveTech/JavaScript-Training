//1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

function duplicate(str){
    let ans=""
    for(let i=0;i<str.length;i++){
        let ch=str.charAt(i);
        if(ans.indexOf(ch)==-1){
            ans+=ch;
        }
    }
    return ans;
}


console.log(duplicate("Hello Yellow"))
console.log(duplicate("Nishint Goyal"))