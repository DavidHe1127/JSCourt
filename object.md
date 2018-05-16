## Object

* [Object.keys|values|entries](#object-keys-values-entries)

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


