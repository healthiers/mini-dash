function isFunction(value) {
  return !!value && typeof value === 'function'
}

module.exports = isFunction
module.exports.default = isFunction
