var through = require('through2')
var split = require('split')

var count = 0
var replacer
var newLine

process.stdin
  .pipe(split())
  .pipe(through(function (line, _, done) {
    // console.log('Line in:', line.toString())
    // console.log('Count is:', count)
    var bracket_digit = /\[\d+/g
    replacer = '[' + count
    // console.log('Replacer:', replacer)
    newLine = line.toString().replace(bracket_digit, replacer)
    // console.log('Line after:', line.toString())
    this.push(newLine + '\n')
    count++
    done()
  }))
  .pipe(process.stdout)
