// 5. Write a program to print all even number first and then all odd numbers using one for loop
let even=""
let odd=""

for(let i=1;i<=100;i++){
    if(i%2==0){
        even+=i+" "
    }
    else{
        odd+=i+" "
    }
}
console.log(even+odd);
