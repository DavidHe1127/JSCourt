## Module formats

List below shows well-known `module formats`:

* [AMD](#amd)
* [ES Modules](#es-module)
* [commonJS](#cjs)
* [UMD](#umd)

### amd
Stands for `Asynchronous module definition`. It's designed to improve web performance by loading modules asynchronously even if one module depends on another.

```js
// foo.js
define(['jquery', 'underscore'], function ($, _) {
    //    methods
    function a(){};    //    private because it's not returned (see below)
    function b(){};    //    public because it's returned
    function c(){};    //    public because it's returned

    //    exposed public methods
    return {
        b: b,
        c: c
    }
});
```

`requireJS` implements `AMD` to make module loading easier for you. let's see `requireJS` in action.

Firstly, reference to `requireJS` source and then specify the entry file by setting value in `data-main` attribute. In our case, we use `app.js` as entry point.

```html
...
<script src="lib/require.js" data-main="app"></script>
...
```

app.js
```js
require.config({
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    "underscore": "lib/underscore" // relative to directory where app.js resides
  }
});
```

Define your own module `template.js` in `lib/template.js`.
```js
// dependencies template.js relies on
define(['underscore', 'jquery'], function() {
  var showName = function(n) {
    var temp = _.template("Hello <%= name %>");
    $("body").html(temp({name: n}));
  };
  return {
    showName: showName
  };
});
```

To use it in app.js
```js
...
require(['lib/template'], function(template) {
  template.showName("Jack");
});
```

### es-module
ES6 supports `esm` out of box. Most of big brands - Chrome, FireFox already has this feature built in. Note, `import` and `export` directives are static that means dependencies and exports are determined at the build time not runtime. That enables static analyzer to build a full tree of dependencies without running code.

At the time of this writing, dynamic loading of modules is not supported.


### cjs
`CommonJS` allows dependencies to be exported and imported via directives `module.exports/exports & require`. NodeJS implements `CommonJS` for dependency management.

### umd
Stands for `Universal Module Definition`. It's both `AMD` and `CommonJS` compatible, as well as supporting `global` variable definition.

myModule.js
```js
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "underscore"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"), require("underscore"));
    } else {
        root.Requester = factory(root.$, root._);
    }
}(this, function ($, _) {
    // this is where I defined my module implementation

    var Requester = { // ... };

    return Requester;
}));
```

To use it in app.js
```js
mymodule.myFunction();
```

SystemJS implements `UMD`.

