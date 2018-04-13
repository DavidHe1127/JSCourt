* Bitwise not any number x yields `-(x+1)`. For example, `~5` yields `-6`. A common use case is `if(~arr.indexOf(1))` to check if arr has a specific element
* Regex that matches all numbers (include integers and floats)
```js
var valid = '$12.77'.match(/[-+]?(?:\d*\.?\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?/); // [ '12.77', index: 1, input: '$12.77' ]
```
* Use Unary Operator to convert something to a number
```js
+3     // 3
+'3'   // 3
+true  // 1
+false // 0
+null  // 0
+function(val){  return val } // NaN
```

