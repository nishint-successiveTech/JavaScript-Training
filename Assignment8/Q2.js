// 2. let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }

// Error is : instead of myObject.property we have to use myObject[property] for accessing the value associated with key

//Corrected Code

let myObject = { name: "John", age: 30 };
for (property in myObject) {
  console.log(property + ": " + myObject[property]);
}
