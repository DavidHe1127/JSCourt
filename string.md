## String

* [Trimming](#trimming)
* [Replacement](#replacement)
* [Truncation](#truncation)
* [Padding](#padding)
* [Use bitwise to check inclusion of something](#use-bitwise-to-check-inclusion-of-something)

### trimming
`trimLeft` is an alias of `trimStart`, `trimRight` is an alias of `trimEnd`.

```js
'   abc'.trimLeft(); // abc
'abc   '.trimRight(); // abc
'    abc   '.trim(); // abc
```

### replacement
* `str.replace(regex|substr, newSubStr|function)`
* Does not change the original string. It instead returns a new string
* Allows for multiple patterns separated by parentheses

```js
function normalize (type) {
  var rr = type.replace(/(\s+)(&?)/g, (match, p1, p2) => {
    if (p1) {
      p1 = '_';
    }

    if (p2) {
      p2 = '-';
    }
    return p1 + p2;
  });
}

normalize('Heavy Rain & Showers'); // Heavy_Rain_-_Showers
```

### truncation
Stick to one method over the other. My preference is `substr`.
```js
// 1st arg start, 2st arg count
'david'.substr(-3); // vid
'david'.substr(1); // avid
'david'.substr(1, 1); // a
'david'.substr(1, 2); // av
```

### padding

```js
'15'.padStart(5, '0'); // 00015
'123'.padStart(5, '0'); // 00123

'15'.padStart(5, '0'); // 15000
'123'.padStart(5, '0'); // 12300
```

### use-bitwise-to-check-inclusion-of-something

Bitwise not any number x yields `-(x+1)`. For example, `~5` yields `-6`. A common use case is `if(~arr.indexOf(1))` to check if arr has a specific element.
