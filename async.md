## Async/Await

* [Async/Await Summary](#summary)
* [Async](#async)
* [Turn a sync into async](#turn-a-sync-into-async)

### summary
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

### turn-a-sync-into-async

```js
function foo() {
  return Promise.resolve(5);
}

foo().then(console.log);
```
