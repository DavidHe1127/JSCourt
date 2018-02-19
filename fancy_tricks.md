* Bitwise not any number x yields `-(x+1)`. For example, `~5` yields `-6`. A common use case is `if(~arr.indexOf(1))` to check if arr has a specific element
* Regex that matches all numbers (include integers and floats)
```js
var valid = '$12.77'.match(/[-+]?(?:\d*\.?\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?/); // [ '12.77', index: 1, input: '$12.77' ]
```
