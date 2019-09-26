## Object

* [Object.keys|values|entries](#object-keys-values-entries)
* [Seal an object](#seal-an-object)

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

// New properties may be added, existing properties
// may be changed or removed.
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

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

