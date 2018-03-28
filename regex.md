* `^` and `$` vs `\b`
`^` matches the beginning of a string and `$` matches the ending of a string.
```js
// given abc

^a // matches a
^b // matches nothing

c$ // matches c
b$ // matches nothing

/\bab\b/ // matches nothing
/\babc\b/ // matches abc
```
