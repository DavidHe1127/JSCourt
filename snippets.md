* [Async/Await](#async-await)
  * [Error handling](#error-handling)
  * [operation in parallel](#async-in-parallel)
* [Craft your own promisify](#craft-promisify)
* [Create an array of N elements](#create-array-filled-up-with-ele)

### async-await
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
#### error-handling:
```js
// do this
const data = await doSomething()
    .catch(e => console.error('Error when doingSomething', e.message));
if (!data) { /* Bail out somehow */ }

// not this
try {
  ...
} catch(err) {
  ...
}
```

#### async-in-parallel
```js
await Promise.all([ doSomething(), doSomethingElse()]);

// or even like this
const fixturesPromise = fixtureModel.fetchAll()
const teamPromise = teamModel.fetch(teamId)

const fixtures = await fixturesPromise
const team = await teamPromise
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

// usage
promisify(callback => asyncOperation({}, callback)).then(); 
```

### create-array-filled-up-with-ele

```
Array.from({length: 20}, (val, key) => {
  return {
    a: 12,
    i: key // 1,2,3,4,5...20
  }
})
```
