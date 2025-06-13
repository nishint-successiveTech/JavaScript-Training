// Give an example of using a callback function to handle an asynchronous operation in JavaScript

function callback2(call, url) {
  fetch(url)
    .then((response) => response.json())
    .then((dataResponse) => {
      call(null, dataResponse);
    })
    .catch((e) => {
      call(e, null);
    });
}
function callback(error, data) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Data:", data);
  }
}

let url = "https://api.github.com/users/nishint-successiveTech";
callback2(callback, url);
