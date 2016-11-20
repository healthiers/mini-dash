# mini-dash [![Build Status](https://travis-ci.org/healthiers/mini-dash.svg?branch=master)](https://travis-ci.org/healthiers/mini-dash)

mini-dash is a small library aiming to replicate some of the features found in underscore/lodash. This library however differs from lodash/underscore in a few aspects:

## diffrences

### structure
* All methods are in this package (no separate packages for individual methods)
* Zero dependencies
* Full source code for any method can be found under `<method-name>/index.js`
* Tests for any method can be found under `<method-name>/test.js`
* You can require each method using `require('mini-dash/<method-name>')` or `import method from 'mini-dash/<method-name>'`
* You can also require them using `require('mini-dash').method` or `import { method } from 'mini-dash'` which is not recommended if you are using webpack or any similar bundler
* No methods that are available on ES5 arrays will be reimplemented

### source
* All methods guarantee not to mutate any of the given arguments
* All methods use `for` loops under the hood (no `Array.filter`, `Array.map`, etc)
* No methods do any sanity checks on the given input, if it expects let's say an `Array` it will fail with non-array inputs. This is by design and it won't change.
* Any and all methods are simple and not covering all the cases their lodash/underscore counterparts do, only the most common ones
* If something fails, you can debug all methods in 30 seconds, no convoluted execution paths

## docs
### Coming soon...