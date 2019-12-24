var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var space = lines[0].split(' ');
var a = Number(space[0]);
var b = Number(space[1]);
var c = Number(space[2]);
var d = Number(space[3]);
var e = 0;

e = (a + b + c + d) - 3;
console.log(e); 