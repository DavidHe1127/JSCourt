## Regex

* [Match all numbers including integers and floats](#match-all-integers-floats)
* [Segment matching vs word boundary](#segment-matching-n-word-boundary)

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

