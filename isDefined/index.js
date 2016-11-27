/* eslint-disable init-declarations */
var UNDEFINED

/**
 * Checks if the given value is truthy (not null or undefined)
 * @param {any} value An arbitrary value
 * @returns {Boolean} false if value is null or undefined, true otherwise
 * 
 * @memberof module:mini-dash
 */
function isDefined(value) {
  return value !== UNDEFINED && value !== null
}

module.exports = isDefined
module.exports.default = isDefined
