// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.
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

async function fromCalling() {
  await resolvedPromise(url);
  console.log("Hello");
}

fromCalling();
