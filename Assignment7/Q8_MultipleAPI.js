// 8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

async function multipleAPI(urls) {
  const fetchPromise = urls.map((url) => fetch(url).then((res) => res.json()));
  const results = await Promise.all(fetchPromise);
  let combinationOfTheirId = "";
  for (let ans of results) {
    combinationOfTheirId += ans.id;
  }
  return combinationOfTheirId;
}
const apiUrls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

multipleAPI(apiUrls).then((data) =>
  console.log(data)
);
