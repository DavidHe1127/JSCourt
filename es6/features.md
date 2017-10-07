## New Features

* Array
  * [Array from](#array-from)
  * [Array of](#array-of)
  * [Array fill](#array-fill)
* String
  * [String includes](#string-includes)
  * [String repeat](#string-repeat)
* Object
  * [Object values](#object-values)
* [Rest/Spread operatos and object destructering](#spread-rest-destructering)
  * [Spread](#spread)
  * [Rest](#rest)
  * [Default values for function arguments](#default-values)
  * [Destructering](#destructering)

### array-from
It converts any data structures that implement `Iterator` interface to array.
Iterable data structures include:
  * Array
  * String
  * Map
  * Set
  * arguments
  * DOM data structures
Please note `WeakMap`, `WeakSet` and `plain object` are not iterable.

```js
Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
Array.from([1, 2, 3]); // [1, 2, 3]

Array.from([1, 2, 3], x => x + x); // [2, 4, 6]
Array.from({length: 5}, (v, i) => i); // [0, 1, 2, 3, 4]
```

```js
// use cases
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

Array.isArray(s); // false
Array.isArray(Array.from(s)); // true

Array.from(arguments) // gives you the array
```
### array-of
It is used to create an array in a consistent way (no function overriding). See the example code below:

```js
// old way
Array() // []
Array(3) // [, , ,] empty slots not undefined
Array(3, 11, 8) // [3, 11, 8]

// new way
Array.of(3, 11, 8) // [3, 11, 8]
Array.of(3) // [3]
Array.of() // []
```

### array-fill
It is used to populate an array.

```js
['a', 'b', 'c'].fill(7) // [7, 7, 7]

['a', 'b', 'c'].fill(7, 1, 2) // ['a', 7, 'c']
// 2nd arg - start index
// 3nd arg - end index exclusive
```

### string-includes
Used to check if a string contains something.

```js
'adfs'.includes('a') // true
'adfs'.includes('ad') // false
```

### string-repeat
Used to repeat the string by given times.

```js
'abc'.repeat(5) // abcabcabcabcabc
```

### object-values
Similar to `Object.keys({a: 1, b: 2})`, it returns all values in an array.

```js
Object.values({a: 1, b: [1, 2]}) // [1, [1, 2]]
```

### spread-rest-destructering

### spread
It basically expands array into individual parameters.

```js
function a(first, second) {
  console.log(first, second); // 10 15
  console.log(arguments[0]); // 10
  console.log(arguments[1], arguments[2]); // 15 20
  console.log(arguments[3]); // 25
}

var params = [10, 15];
a(...params, 20, ...[25]);    // 10 15 20 25
```

### rest
Same syntax as spread operator but collects parameters and turns them into an `array`.

```js
function a(b, ...args) {
  console.log(Array.isArray(args)); // true
  console.log(args); // [2, 3]
  console.log(b); // 1
}

a(1,2,3)
```

Two things to be aware of:

1. must be last argument
2. only one rest parameter allowed

```js
function a(a, ...params, b) {
  console.log(a, params, b);
}
a(5, 10, 15);    // SyntaxError: parameter after rest parameter

function a(...param1, ...param2) {
}
a(5, 10, 15);    // SyntaxError: parameter after rest parameter
```
### default-values

Default values in function arguments can be set as below:
```js
var getDefault = function () {
  return 4;
};

function a(a, b = ++a, c = getDefault()) {
  console.log(c); // 4
  console.log(a); // 1
  console.log(b); // 2
}
a(1, 2);
```

### destructering
Start with basics

```js
function a({port}, bundle = {
  protocol,
  port
}) {
  console.log(port, bundle.protocol); // 888 http
};

var options = {
  protocol: 'http',
  port: 800
}

a(options, options);

function b({
 delay = 150,
 log = true
}) {
  console.log(delay, log); // 150 false
}

var c = {
 log: false
};

b(c);
```

If parameters are omitted, errors thrown out.

```js
function a({protocol, port, delay, retries, timeout, log}) {
}
a(); // TypeError: Cannot match against 'undefined' or 'null'
```

To fix it, we need to assign a default value

```js
function a({protocol, port, delay, retries, timeout, log} = {}) {
}
a(); // no error
```

So one use case is to check mandatory arguments

```js
function throwError() {
  throw new Error('Missing parameter');
}

function a(param1 = throwError()) {
}
a(10); // ok
a(); // Error: missing parameter
```

Destructering also works on arrays.

```js
const [age, sex] = [18, 'male'];

console.log(age) // 18
console.log(sex) // 'male'
```

Renaming!!!

```js
var state = {a: 'a', b: 'b'};

const {a: abc, b: efg} = state;

console.log(a); // undefined
console.log(abc); // a
```

