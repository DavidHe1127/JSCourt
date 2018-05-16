## Number

* [Exponent](#exponent)
* [Currency Formatting](#currency-formatting)
* [Precisive rounding](#precisive-rounding)
* [Use unary for number conversion](#use-unary-for-number-conversion)

### exponent
Syntactic sugar of `Math.pow`.

```js
Math.pow(7, 3); // 343
7 *** 3 // 343
4 ** 2 // 16
```

### currency-formatting

```js
const number = 5890;
number.toLocaleString('en', {style: 'currency', currency: 'GBP'} // £5,890.00
```

### precisive-rounding

```js
function round(number, precision) {
  var shift = function (number, precision, reverseShift) {
    if (reverseShift) {
      precision = -precision;
    }
    var numArray = ("" + number).split("e");
    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
  };
  return shift(Math.round(shift(number, precision, false)), precision, true);
}
```

### use-unary-for-number-conversion

```js
+3     // 3
+'3'   // 3
+true  // 1
+false // 0
+null  // 0
+function(val){ return val } // NaN
```





