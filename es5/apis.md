## New Features

* Object
  * [Create objects via defineProperties](#create-objs-via-defintproperties)
* String
  * [String replacement](#string-replacement)
  * [String truncation](#string-truncation)
* Array
  * [Reverse](#reverse)
  * [Sort](#sort)

### create-objs-via-defineproperties
  * `Object.defineProperty` and `Object.defineProperties` can take `value` or `get/set func` but not both.
  * `configurable, writable, enumerable` default to `false`
  * Use either combinations `wriable/value` or `get/set` on a property

Object.defineProperty
```js
function Product(name, price) {
  this.name = name;
  this.price = price;
  var _discount; //private member

  Object.defineProperty(this, 'discount', {
    get: function() {
      return _discount;
    },
    set: function(value) {
      _discount = value;
      _discount > 80 && (_discount = 80);
    }
  });
}
var sneaker = new Product('Sneaker', 20);
sneaker.discount = 50; //50, setter is called
sneaker.discount += 20; //70, setter is called
sneaker.discount += 20; //80, not 90
```

Object.defineProperties
```js
var obj = {};
Object.defineProperties(obj, {
  'price': {
    value: 10,
    writable: true, // property value can be changed
    configurable: false, // property cannot be deleted
    enumerable: true // property shows up during enumeration of the properties like 
  },
  'code': {
     get: function() {
       return 'BD001';
    },
    enumerable: true
  },
  'color': {
     get: function() {
       return 'red';
     }  
  }
});
console.log(obj); // { price: 10, code: [Getter] } color property not show up since it is not enumerable
obj.code = 10; // throws an error since no setter defined
```

