## Regex

* [Match all numbers including integers and floats](#match-all-integers-floats)
* [Segment matching vs word boundary](#segment-matching-n-word-boundary)
* [Matches any character including white-space and new line](#match-any-char-including-whitespace-newline)
* [Capture group](#capture-group)

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

### capture-group

```js
const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
const x = pattern.exec('2018-05-18');

console.log(x.groups.year); // '2018'
console.log(x.groups.month); // '05'
console.log(x.groups.day); // '18'
```