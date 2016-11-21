var UNDEFINED

function isDefined(value) {
  return value !== UNDEFINED && value !== null
}

module.exports = isDefined
module.exports.default = isDefined
