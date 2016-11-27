/**
 * Checks if the given value is a function
 * @param {any} value An arbitrary value
 * @returns {Boolean} true if value is a function false otherwise
 * 
 * @memberof module:mini-dash
 */
function isFunction(value) {
  return !!value && typeof value === 'function'
}

module.exports = isFunction
module.exports.default = isFunction
