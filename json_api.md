## Fancy things you can do with JSON.stringify()

### Replacer
```js
var user = {
  name: 'andy',
  isAdult: false,
  age: 11,
  addr: 'sydney'
};

JSON.stringify(user, (k, v) => {
  if (k === 'isAudlt') {
    return v === true ? 1 : 0;
  }
  
  return v;
});

// {"name":"andy","isAdult":0,"age":11,"addr":"sydney"}
```

### Delete a property
```js
var user = {
  name: 'andy',
  isAdult: false,
  age: 11,
  addr: 'sydney'
};

var res = JSON.stringify(user, (k, v) => {
  if (k === 'isAdult') {
    return;
  }

  return v;
});

// {"name":"andy","age":11,"addr":"sydney"}
```

### Remove unwanted properties
```js
var user = {
  name: 'andy',
  isAdult: false,
  age: 11,
  addr: 'sydney'
};

var res = JSON.stringify(user, ['name', 'addr']);

// {"name":"andy","addr":"sydney"}
```

### Format result
```js
var user = {
  name: 'andy',
  isAdult: false,
  age: 11,
  addr: 'sydney'
};

var res = JSON.stringify(user, null, 2);

// {
//  "name": "andy",
//  "isAdult": false,
//  "age": 11,
//  "addr": "sydney"
// }
```
### Deep clone
```js
var user = {
  name: 'andy',
  isAdult: false,
  age: 11,
  addr: 'sydney'
};

JSON.parse(JSON.stringify(user)) // DO NOT DO IT ON LARGE JSON OBJECT - PERFORMANCE PROBLEM
```
Note, `JSON.parse` takes two arguments - 1st is the string to parse, 2nd is replacer same as `JSON.stringify`
