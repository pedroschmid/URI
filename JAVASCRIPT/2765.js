var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var string = lines[0].split(',')

var d = string[0];
var m = string[1];

console.log(d);
console.log(m);