* [Plugins vs Presets](#plugins-vs-presets)

#### plugins-vs-presets
* `presets` are a collections of `plugins`. `Plugins` can be included individually in the `plugins` array or collection of `plugins` in the `presets` array
* `presets` and `plugins` evaluation ordering is different:
```json
"plugins": [
  "transform-decorators-legacy", // evaluated first
  "transform-class-properties" // evaluated second
]

"presets": [
  "es2015", // evaluated first
  "react",  // evaluated second
  "stage-2" // evaluated third
]
```





