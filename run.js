var through = require('through2')
var split = require('split')
var uptick = require('./uptick')

process.stdin
  .pipe(split())
  .pipe(through(uptick))
  .pipe(process.stdout)
