// 9.function Person(name, age) { this.name = name; this.age = age; }
// var person = Person("John Doe", 30);
// console.log(person.name);

//Error is : we have to use new keyword

//Corrected Code

function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person = new Person("John Doe", 30);
console.log(person.name);
