var through = require('through2')
var split = require('split')

var count = 0

process.stdin
  .pipe(split())
  .pipe(through(function uptick (line, _, done) {
    var bracket_digit = /\[\d+/g
    var replacer = '[' + count
    line.replace(bracket_digit, replacer)
    count++
    done()
  }))
  .pipe(process.stdout)
