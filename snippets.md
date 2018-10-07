* [Async/Await](#async-await)


#### async-await
```js
async function example() {
  const arrayOfFetchPromises = [
    fetch('1.txt'),
    fetch('2.txt'),
    fetch('3.txt')
  ];
  
  // Regular iterator
  for (const item of arrayOfFetchPromises) {
    console.log(item); // logs a promise
  }
  
  // Async iterator
  for await(const item of arrayOfFetchPromises) {
    console.log(item); // logs a response
  }
}
```
