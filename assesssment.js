// function callAPI(url) {
//   return new Promise((resolve, reject) => {
//     let data = fetch(url);
//     resolve(data)==false
//   });
// }

// let url = "https://github.com/users/nishint-successiveTech";
// callAPI(url).then((dt) => console.log(dt))

let url = "https://api.github.com/users/nishint-successiveTech";

function resolvedPromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(() => resolve());
    }, 2000);
  });
}
resolvedPromise()
// async function fromCalling() {
//   await resolvedPromise(url);
//   console.log("Hello");
// }

// fromCalling();

let callingFunction = async () => {
try {
  const response = fetch(url);
  if(!response){
    throw new Error('API ERROR')
  }
  const data = (await response).json();
  console.log(data);
} catch (error) {
  console.log("error", error)
}
}
callingFunction()