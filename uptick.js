var count = 0

module.exports = function uptick (line, _, done) {
  var bracket_digit = /\[\d+/g
  var replacer = '[' + count
  line.replace(bracket_digit, replacer)
  count++
  done()
}

