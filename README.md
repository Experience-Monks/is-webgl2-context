# is-webgl2-context

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Test whether a canvas context is using WebGL 2.

```js
var isWebGL2 = require('is-webgl2-context')

if (isWebGL2(gl)) {
  // do 2.0 effects
} else {
  // do 1.0 effects
}
```

## Usage

[![NPM](https://nodei.co/npm/is-webgl2-context.png)](https://www.npmjs.com/package/is-webgl2-context)

#### `bool = isWebGL2(gl)`

Returns `true` if `gl` is an instance of WebGL2RenderingContext.

## See Also

- [is-webgl-context](https://github.com/mattdesl/is-webgl-context)

## License

MIT, see [LICENSE.md](http://github.com/Jam3/is-webgl2-context/blob/master/LICENSE.md) for details.
