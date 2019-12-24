var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var data = lines[0].split('/')

var d = data[0];
var m = data[1];
var a = data[2];

console.log(m + "/" + d + "/" + a)
console.log(a + "/" + m + "/" + d)
console.log(d + "-" + m + "-" + a)