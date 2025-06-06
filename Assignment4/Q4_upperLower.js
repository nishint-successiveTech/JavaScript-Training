//Write a program to convert given string to upperCase OR lowerCase

function convertToUpperCase(str)
{
    let ans=""
    for(let i=0;i<str.length;i++){
        let ch=str.charAt(i)
        let ascll=ch.charCodeAt(0)

        if(ascll>=97 && ascll<=122){
            newCh=String.fromCharCode(ascll-32)
            ans+=newCh
        }
        else{
            ans+=ch
        }    
    }
    return ans
}

function convertToLowerCase(str)
{
    let ans=""
    for(let i=0;i<str.length;i++){
        let ch=str.charAt(i)
        let ascll=ch.charCodeAt(0)

        if(ascll>=65 && ascll<=90){
            newCh=String.fromCharCode(ascll+32)
            ans+=newCh
        }
        else{
            ans+=ch
        }    
    }
    return ans
}

console.log(convertToUpperCase("this is uppercase"))
console.log(convertToLowerCase("THIS IS LOWERCASE"))