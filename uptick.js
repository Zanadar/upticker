var count = 0
var replacer

module.exports = function (line, _, done) {
  var bracket_digit = /\[\d+/g
  replacer = '[' + count
  var newLine = line.toString().replace(bracket_digit, replacer)
  this.push(newLine + '\n')
  count++
  done()
}
