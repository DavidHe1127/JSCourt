## Async/Await

* [Async/Await Summary](#Summary)
* [Async](#async)
* [Turn a sync into async](#Turn-a-sync-into-async)
* [Async in sequence/parallel](#Async-in-sequence-parallel)

### Summary
* async - The return value of an `async` function is always wrapped in a `Promise.resolve`.
* await - Resolve the promise - an alternate way to do `then()`.

### async

```js
const getBook = async bookName => {
  const book = await fetchBook(bookName);

  // simultaneously fetch author and rating
  const [author, rating] = await Promise.all([fetchAuthor(book.author_id), fetchRating(book.id)]);

  return {
    ...book,
    author,
    rating
  };
};
```

### Turn a sync into async

```js
function foo() {
  return Promise.resolve(5);
}

foo().then(console.log);
```

### Async in sequence and parallel
When the runtime sees `await` it will wait until the await function return value has been resolved before **executing any lines below it**. Compare the two patterns below:

```js
async function orderItems() {
  const items = await getCartItems();
  const noOfItems = items.data.length;

  for (var i = 0; i < noOfItems; i++) {
    const res = await sendRequest(items.data[i]); // execution in sequence
  }

  items.data.forEach(async i => {
    const res = await sendRequest(items.data[i]); // execution in parallel
    // you will see five times of ccc being printed all at once. The flow is do sendReq 5 time straight
    // once any one of them gets resolved AND nothing in the call stack, runtime will then pick queued
    // console.log('ccc') and execute them.
    console.log('ccc')                                                    
  });
}
```

