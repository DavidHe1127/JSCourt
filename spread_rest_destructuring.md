## Spread, Rest and Destructuring

## Spread and Rest

#### Array

```js
// rest
const x = [1,2,3];

const [first, ...rest] = x;

console.log(first); // 1
console.log(rest); // [2, 3]

// spread
const y = [first, ...rest];

console.log(y); // [1, 2, 3]
```

#### Function
Two things to be aware of, when being used as function argument.

* must be last argument
* only one rest parameter allowed

```js
function a(b, ...args) {
  console.log(Array.isArray(args)); // true
  console.log(args); // [2, 3]
  console.log(b); // 1
}

a(1,2,3)
```

#### Object

```js
const x = {a: 1};
const y = {a: 2, b: 3};
const z = {c: 4};

const xyz = {...x, ...y, ...z};

console.log(xyz); // {a: 2, b:3, c: 4}
```

## Destructuring

#### Object
```js
const x = {a: 1, b: 2};

const {a: y, b: z} = x;

console.log(y); // 1
console.log(z); // 2
console.log(a, b); // undefined, undefined

const {a, b} = x;

console.log(a); // 1
console.log(b); // 2
```

#### Function argument

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
