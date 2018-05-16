## Function

* [Argument default value](#argument-default-value)
* [Validate mandatory field](#validate-mandatory-field)

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
