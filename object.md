## Object

* [Object.keys|values|entries](#object-keys-values-entries)
* [Seal an object](#seal-an-object)
* [Shallow copy and deep copy an object](#object-shallow-copy-and-deep-copy)

### object-keys-values-entries

```js
const x = {a: 1, b: 2};

Object.keys(x); // [a, b]
Object.values(x); // [1, 2]
Object.entries(x); // [['a', 1], ['b', 2]]

for (let [k, v] of Object.entries(x)) {
  console.log(`key: ${key} value: ${value}`);
}
```

### Seal an object

Seal a object will:
- prevent new properties from being added
- marking all properties as non-configurable
- properties value can still be changed as long as they are writable.

```js
var obj = {
  prop: function() {},
  foo: 'bar'
};

var o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // === true

// Changing property values on a sealed object
// still works.
obj.foo = 'quux';

// But you can't convert data properties to accessors,
// or vice versa.
Object.defineProperty(obj, 'foo', {
  get: function() { return 'g'; }
}); // throws a TypeError
```

### Object deep copy and shallow copy
Consider approaches below:

```js
const s1 = {
  a: 12,
  b: {
    val: 'this is good'
  }
};

const s2 = Object.assign({}, s1);
const s3 = {...s1, c: 50};
```
Both cases **DO NOT** deeply clone object `s1` meaning changes to `b.val` in `s1` will also be reflected in `s2` and `s3`.  Even if primitive-typed prop `a` does.

To correctly clone object, use `lodash.deepClone`.
