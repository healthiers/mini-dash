var fs = require('fs')
var path = require('path')

var ignored = ['node_modules', '.git', '.vscode']

function directories() {
  return fs.readdirSync(__dirname).filter(function (file) {
    return fs.statSync(path.join(__dirname, file)).isDirectory() && ignored.indexOf(file) < 0
  }).sort()
}

function generateKeyValuePair(directory) {
  return '  ' + directory + ': require(\'./' + directory + '\')'
}

function generateIndexContents() {
  return '/** @module mini-dash */\n'
    + 'module.exports = {\n'
    + directories().map(generateKeyValuePair).join(',\n')
    + '\n}\n'
}

fs.writeFileSync(path.join(__dirname, 'index.js'), generateIndexContents())
