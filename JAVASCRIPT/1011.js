var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var pi, result;
radius = Number(lines[0]);
result = (4 / 3.0) * 3.14159 * Math.pow(radius, 3);
console.log("VOLUME = " + result.toFixed(3));