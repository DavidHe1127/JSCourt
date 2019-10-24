## Array

* [Array.from](#array-from)
* [Array.of](#array-of)
* [[].fill](#array-fill)
* [indexOf with tilde](#indexof-tilde)

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

const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

Array.isArray(s); // false
Array.isArray(Array.from(s)); // true

Array.from(arguments) // gives you the array
```

### array-of
It's used to create an array in a consistent way (no function overriding).

```js
// old way
Array() // []
Array(3) // [, , ,] empty slots not undefined
Array.from({length: 3}) // [undefined, undefined, undefined]
Array(3, 11, 8) // [3, 11, 8]

// new way
Array.of(3, 11, 8) // [3, 11, 8]
Array.of(3) // [3]
Array.of() // []
```

### array-fill

```js
['a', 'b', 'c'].fill(7) // [7, 7, 7]

['a', 'b', 'c'].fill(7, 1, 2) // ['a', 7, 'c']
// 2nd arg - start index
// 3nd arg - end index exclusive
```

### indexof-tilde
`~-1` is 0. `~x` is equal to `-(x+1)`.
```js
if (~[1, 2].indexOf(1)) {
  // if array has element 1 dosomething 
}
```

