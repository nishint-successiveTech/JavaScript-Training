// 12. async function getData() {
//     setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
//  getData().then(function(data) {
//     console.log(data);
//  });

// Error is : we need to wrap the setTimeout function in a promise

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5]);
    }, 1000);
  });
}

async function fetchData() {
  const data = await getData();
  console.log(data);
}

fetchData();
