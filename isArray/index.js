/**
 * Checks if value is an array
 * @param {any} value An arbitrary value
 * @returns {Boolean} true if value is an array, false otherwise
 * 
 * @memberof module:mini-dash
 */
function isArray(value) {
  return value instanceof Array
}

module.exports = isArray
module.exports.default = isArray
