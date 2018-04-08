### Tricky Parts

* [Prototype](#prototype)
* [Constructor](#constructor)
* [Regex](#regex)
* [Primitive-vs-reference](#primitive-vs-reference)
* [Arguments pass by value](#arguments-pass-by-value)
* [This keyword in Arrow function](#this-keyword-in-array-function)
* [isNaN vs Number](#isnan-vs-number)
* [Type-casting n coercion](#type-casting-n-coercion)
* [Call toString on an object](#call-tostring-on-an-object)

### Prototype
Every JS func (except Fucntion.bind) has a prototype property - an empty object by default. You attach properties and methods on this prototype property in order to implement inheritance.

If an object is created with an object literal `var newObj = {}`, it inherits properties from `Object.prototype` and we say its prototype object (or prototype attribute) is Object.prototype. If an object is created from a constructor function such as `new Object (), new Fruit () or new Array () or new Anything ()`, it inherits from that constructor `Object (), Fruit (), Array (), or Anything ()`. For example, with a function such as Fruit (), each time we create a new instance of Fruit `var aFruit = new Fruit ()`, the new instance’s prototype is set to the prototype from the Fruit constructor, which is `Fruit.prototype`.

```js
var obj = {};
obj.protoype // undefined why is that?
```
There is an internal property called `[[proto]]` which is not accessible to programmers. That property points to object prototype. However, most engines make this property accessible as `__proto__`. When you create an object like
`var o = {a: false, b: 'something', ...}` then `o.__proto__` is `Object.prototype`.

### Constructor
The critical feature of constructor invocation (when use new) is that the prototype property of the constructor is used as the prototype of the new object.

Two objects are instances of the same class only if they inherit from the same prototype object.

```js
r instanceof Range // return true if r inherits from Range.prototype
```

### Regex
* Use `g` will make Regex stateful - it remembers the last index of match and will continue the search starting at that index.

```js
var arr = ['defabc', 'abc'];

// will only match 'defabc' but not 'abc' since the last index after first match is 6 - the next index search will start at
var reg = /abc/g;

arr.forEach(ele => reg.test(ele)); // solution is set reg.lastIndex = 0 after each match
```

* `new RegExp(regexp|string)` will create a new regex object which has methods like `test` and `exec`.

* `\\?` represent the question mark in `regex string`.

### primitive-vs-reference
Primitive types are compared by value while Reference type are compared by both reference and value.

```js
3 === 3 // true
[1] === [1] // false
```

### arguments-pass-by-value
In Javascript, we can only access or modify reference-typed value by reference.
  * Primitive values are stored in stack. When variables holding the values are passed into the function, copy of values are passed. Thus, any modifications to arguments' values will not affect variables sitting outside of the function.
  * Reference values are stored in heap. The reference itself, think of it as the pointer, is stored in stack. Same as primitive values, copy of value is passed. Since value is the pointer, changes made on argument will also reflect on outside variables.

```js
var o = {
  a: function () {},
  b: [],
  c: 5
};

function calc(r) {
  r.a = 10;
  r.b = 4;
  r.c = [];
  r = {};
}

calc(o); // {a:10, b:4, c:[]}
```

### this-keyword-in-array-function
A few things to keep in mind
  * No `arguments` object
  * No own `this` - always look upward to find `this` context. This differs from traditional functions that have `dynamic this` - its value is determined by how they are called. Arrow functions have `lexical this` - its value is determined by the surrounding scope.
  * Cannot use `apply, call, bind` to change its context - it will be the same value as when they are defined.

### isNaN-vs-Number
`isNaN()` and `Number()` both convert `falsy values excluding undefined but including ' '` such as `'', null, '0', false` into zero. As a result, `isNaN(' ')` or `isNaN('')` returns false. Use `parseInt` will fix this problem as `parseInt` will fail to convert empty string into number.

```js
isNaN(null) // false
isNaN(parseInt('')) // true
```

### type-casting-n-coercion

* Explicit type conversion is called `type-casting`. Type conversion happens in the background is called `coercion`.
```js
Number('12'); // 12 type-casting
1 + '1'; // '11' coercion
```
* All primitives except `null` and `undefined` have object wrappers around their native values.
```js
// use their constructors to cast type
String(123); // '123'
Boolean(123); // true
Number('123'); // 123
Number(true); // 1
Number(false); // 0
```
But watch out for this case:
```js
const bool = new Boolean(false);
if (bool) console.log(1); // it will print 1 since bool is an object - object wrapper is created around its native value
```

### call-tostring-on-an-object
Objects have internal value called `[[Class]]` which is a tag that represents object type. `Object.prototype.toString` returns a string
``[object ${tag}]``. Tag can be either built-in tags `Array`, `String` or `Date` or something that is set explicitly.



