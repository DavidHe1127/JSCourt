## Function

* [Argument default value](#argument-default-value)
* [Validate mandatory field](#validate-mandatory-field)
* [Immediately Invoked Function Expressions in ES6](#iife-es6)

### argument-default-value

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

### validate-mandatory-field

```js
function throwError() {
  throw new Error('Missing parameter');
}

function a(param1 = throwError()) {

}

a(10); // ok
a(); // Error: missing parameter
```

### iife-es6
```js
(global => {
  const MY_CONSTANT = 'api key or something'
  let counter = 0
  let some_array = [1,2,34,5,6,7]

  counter = some_array.reduce (total, item) => total + item
})(window)
```
or if you don't need `window` object:
```js
()=> {
  // code goes here...
}()
```




