// 7. for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 1000);

//Error is : var is function scoped ,so we have to use let for blocked scoped

//Corrected Code

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 2000);
}
