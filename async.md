## Async

* [Async](#async)
* [Turn a sync into async](#turn-a-sync-into-async)

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
