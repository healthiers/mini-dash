# mini-dash [![Build Status](https://travis-ci.org/healthiers/mini-dash.svg?branch=master)](https://travis-ci.org/healthiers/mini-dash)

mini-dash aims to replicate some of the features found in utility libraries such as
[lodash](https://lodash.com/) or [underscore](http://underscorejs.org/), but in a 
much more simplistic way.

## what mini-dash offers
* All methods are in this package (no separate packages for individual methods)
* Zero dependencies
* Full source code for any method can be found under `<method-name>/index.js`
* Tests for any method can be found under `<method-name>/test.js`
* You can require each method using `require('mini-dash/<method-name>')` or `import method from 'mini-dash/<method-name>'`
* You can also require them using `require('mini-dash').method` or `import { method } from 'mini-dash'` which is not recommended if you are using webpack or any similar bundler
* No methods that are available on ES5 arrays will be reimplemented
* All methods guarantee not to mutate any of the given arguments
* All methods use `for` loops under the hood (no `Array.filter`, `Array.map`, etc). Only library method used is `Object.keys`.
* No methods do any sanity checks on the given input, if it expects an `Array` it will fail or return non-deterministic output with non-array inputs. This is by design, so make sure to validate your input.
* All methods are simple and not covering all the cases their lodash/underscore counterparts do, only the most common ones
* If something fails, you can debug all methods in 30 seconds, no convoluted execution paths

## how to use it

### installation

```
npm i -S mini-dash
```

### usage

```js
// import directly, recommended for bundlers like webpack (small footprint in generated code)
import find from 'mini-dash/find' 
import omit from 'mini-dash/omit'

// import all methods, not recommended for bundlers, ok for node
import miniDash from 'mini-dash' 

// import individual methods, not recommended for bundlers, ok for node
import { isString, groupBy } from 'mini-dash'
```

### issues & feature requests

https://github.com/healthiers/mini-dash/issues
