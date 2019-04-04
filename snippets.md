* [Async/Await](#async-await)
* [Craft your own promisify](#craft-promisify)

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

### craft-promisify
```js
const promisify = foo =>
    new Promise((resolve, reject) => {
        foo((error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });

export default promisify;
```
