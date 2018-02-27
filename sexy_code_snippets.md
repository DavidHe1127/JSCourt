* [Promise and Async/Await](#promise-and-async-await)



### promise-and-async-await
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
