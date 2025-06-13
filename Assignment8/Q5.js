// 5. let myArray = [1, 2, 3, 4];
// for (let i = 0; i < myArray.length; i++) {
//    console.log(myArray[i]);
// }

// let myNumber = myArray[5];
// if (myNumber) {
//    console.log('The number is: ' + myNumber);
// } else {
//    console.log('The number is undefined');
// }

//Error is : we are accessing the element with more than array length

//Corrected Code

let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

let myNumber = myArray[5];
if (myNumber) {
  console.log("The number is: " + myNumber);
} else {
  console.log("The number is undefined");
}
