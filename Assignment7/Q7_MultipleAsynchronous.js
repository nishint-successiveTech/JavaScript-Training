// 7. Create a function that performs multiple asynchronous operations in parallel 
// using async/await and waits for all of them to complete before returning the results.

async function multipleAPI(urls) {
    const fetchPromise = urls.map((url) => fetch(url).then((res) => res.json()));
    const results = await Promise.all(fetchPromise);

    return results
  }
  const apiUrls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];
  
  multipleAPI(apiUrls).then((data) =>
    console.log(data)
  );
  
