### Best Practice

* Use let and const in place of var since they are both block-scoped variables.
* Define multiple variables

```js
//bad
var a = 1, b = 2, c = 3;

//ok not the best
var a = 1;
var b = 2;
var c = 3;

//best
const a = 1;
const b = 2;
const c = 3;
```
* Type casting

```js
var reviewScore = 9;

// bad
const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()
// bad
const totalScore = this.reviewScore.toString(); // isn't guaranteed to return a string
// good
const totalScore = String(this.reviewScore);
```

* Utilising `!!` for type casting to return boolean value

```js
const age = 0;
// bad
const hasAge = new Boolean(age);
// good
const hasAge = Boolean(age);
// best
const hasAge = !!age; // false
```

* When enumerating an object you need to filter the prototype methods

```js
typeof object[key] !== 'function' // or object.hasOwnProperty(key)
```

* Cache the length of an array
```js
for(var i = 0, max = Array.length; i < max; i++)
{
  //Do something
}
```
* Always ends switch with a default to ensure there is always a sane result

* Use !== and ===

* Use Number("08") rather than parseInt when doing int conversion

* Use `var o = {}` and `var a = []` literal way rather than new Object and new Array()

* `''` means null while `' '` means one whitespace

* Context is always the value of the `this` keyword, which is a reference to the object that owns the currently executing code

* Each `+` operation will trigger memory allocation. Use `var a = [1,2].join('')`
