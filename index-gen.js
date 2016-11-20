var fs = require('fs')
var path = require('path')

function directories() {
  return fs.readdirSync(__dirname).filter(function (file) {
    return fs.statSync(path.join(__dirname, file)).isDirectory() && ['node_modules', '.git'].indexOf(file) < 0
  }).sort()
}

function generateKeyValuePair(directory) {
  return '  ' + directory + ': require(\'./' + directory + '\')'
}

function generateIndexContents() {
  return 'module.exports = {\n'
    + directories().map(generateKeyValuePair).join(',\n')
    + '\n}'
}

fs.writeFileSync(path.join(__dirname, 'index.js'), generateIndexContents())
console.log('done')