/**
 * Checks if the given value is an object
 * @param {any} value An arbitrary value
 * @returns {Boolean} true if value is an object (arrays are objects as well), false otherwise
 * 
 * @memberof module:mini-dash
 */
function isObject(value) {
  return !!value && typeof value === 'object'
}

module.exports = isObject
module.exports.default = isObject
