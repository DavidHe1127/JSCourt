## Regex

* [Match all numbers including integers and floats](#match-all-integers-floats)
* [Segment matching vs word boundary](#segment-matching-n-word-boundary)
* [Matches any character including white-space and new line](#match-any-char-including-whitespace-newline)
* [Named capture group](#named-capture-group)
* [Unicode character match](#unicode-char-match)
* [Sticky mode](#sticky-mode)

### match-all-integers-floats

```js
var [price] = '$12.77'.match(/[-+]?(?:\d*\.?\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?/); // [ '12.77', index: 1, input: '$12.77' ]
console.log(valid); // '12.77'
```

### segment-matching-n-word-boundary
`^` matches the beginning of a string while `$` matches the ending of a string.

```js
// given abc

^a // matches a
^b // matches nothing

c$ // matches c
b$ // matches nothing

/\bab\b/ // matches nothing
/\babc\b/ // matches abc
```

### match-any-char-including-whitespace-newline

```js
const x = `Lorem ipsum hello
world
`;

/hello.world/u.test(x); // won't work since . matches all chars excluding line terminator - in the case the new line
/hello[\s\S]world/u.test(x); // works but not beautiful

/hello.world/us.test(x); // beautiful! . now matches all characters
```

### named-capture-group

```js
const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
const x = pattern.exec('2018-05-18');

console.log(x.groups.year); // '2018'
console.log(x.groups.month); // '05'
console.log(x.groups.day); // '18'
```

### unicode-char-match
Flag `u` enables *ES2015 Unicode code point escape* `\u{...}` in the pattern.

```js
console.log(/\u{1D306}/u.test('𝌆')); // true
console.log(/\u{21}/u.test('!')); // true

// without u flag
console.log(/\u{21}/.test('!')); // false
console.log(/\u{21}/.test('uuuuuuuuuuuuuuuuuuuuu')); // true
```

### sticky-mode
When flag `y` enabled, it tells regex to look for a match at `lastIndex` and *ONLY* at `lastIndex` (not before or after in the string).

```js
var str = 'whoofooloo';
var regex = /foo/y;

console.log(regex.test(str)); // false
regex.lastIndex = 4;
console.log(regex.test(str)); // true
```

