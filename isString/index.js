/**
 * Checks if the given value is a string
 * @param {any} value An arbitrary value
 * @returns {Boolean} true if value is a string, false otherwise
 * 
 * @memberof module:mini-dash
 */
function isString(value) {
  return typeof value === 'string'
}

module.exports = isString
module.exports.default = isString
