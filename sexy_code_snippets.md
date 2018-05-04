* [Promise and Async/Await](#promise-and-async-await)
* [Turn a sync into async](#turn-a-sync-into-async)
* [Precisive rounding](#precisive-rounding)
* React
  * [Create element dynamically](#create-element-dynamically)
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

### create-element-dynamically
```js
import React from 'react';

// attrs will not be passed when creating react element
const blackList = [
  'payload',
  'type',
  'children',
  'eventsToRegister',
  'fireOnMount',
  'onClick'
];

// attrs that will be reset upon component update
const domAttrs = [
  'className',
  'disabled'
];

export default class ActionWithAnalytics extends React.Component {
  constructor(props) {
    super(props);
    this.target = null;

    const eleProps = Object.keys(this.props).reduce((prev, next) => {
      if (!blackList.includes(next)) {
        prev[next] = this.props[next];
      }
      return prev;
    }, {});

    this.ele = React.createElement(
      this.props.type,
      {
        ...eleProps,
        onClick: this.onClick,
        id: 'dtmEventTarget',
        ref: ele => this.target = ele
      },
      this.props.children
    );
  }

  onEventFire(e) {
    // console.log('adobe', e.type, e.detail);
  }

  componentDidUpdate() {
    domAttrs.forEach(a => {
      this.target[a] = this.props[a];
    });

    this.target.removeEventListener('click', this.onClick);
    this.target.addEventListener('click', this.onClick);
  }

  componentDidMount() {
    this.props.eventsToRegister.forEach(e =>
      this.target.addEventListener(
        e,
        this.onEventFire
      )
    );

    if (this.props.fireOnMount) {
      this.fireEvent();
    }
  }

  componentWillUnmount() {
    this.props.eventsToRegister.forEach(e =>
      this.target.removeEventListener(
        e,
        this.onEventFire
      )
    );

    this.target = null;
  }

  onClick = e => {
    this.fireEvent();
    this.props.onClick(e);
  };

  fireEvent = e => {
    const event = new CustomEvent(this.props.payload.eventName, {
      detail: this.props.payload.eventDetail
    });
    this.target.dispatchEvent(event);
  };

  render() {
    return this.ele;
  }
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
