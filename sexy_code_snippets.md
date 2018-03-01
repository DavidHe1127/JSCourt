* [Promise and Async/Await](#promise-and-async-await)
* [Turn a sync into async](#turn-a-sync-into-async)
* React
  * [Create element dynamically](#create-element-dynamically)

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
