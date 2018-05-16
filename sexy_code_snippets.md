* [Promise and Async/Await](#promise-and-async-await)
* [Turn a sync into async](#turn-a-sync-into-async)
* [Precisive rounding](#precisive-rounding)
* React
  * [Evaluation in conditional rendering statement](#evaluation-in-conditional-rendering-statement)

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

### turn-a-sync-into-async
```js
function foo() {
  return Promise.resolve(5);
}

foo().then(console.log);
```

### precisive-rounding
```js
function round(number, precision) {
  var shift = function (number, precision, reverseShift) {
    if (reverseShift) {
      precision = -precision;
    }
    var numArray = ("" + number).split("e");
    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
  };
  return shift(Math.round(shift(number, precision, false)), precision, true);
}
```

### evaluation-in-conditional-rendering-statement
Use `React.Fragment` to wrap contents up and put it in the conditional statement.

```js
...
const racingPost = hasRacingPost ? <span>Racing Post</span> : <span class="racing_report">Racing Report</span>
...

...
<div>
    {commentsExist && <React.Fragment>
        {racingPost} // evaluation
        <span>
           {comment}
        </span>
        <button>
          Click Me
        </button>
    </React.Fragment>}
</div>
```
