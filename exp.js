var str = 'whoofooloo';
var regex = /foo/y;

console.log(regex.test(str)); // false
regex.lastIndex = 4;

console.log(regex.test(str)); // true
