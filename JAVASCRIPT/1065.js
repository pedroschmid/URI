var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines[0])
var B = Number(lines[1])
var C = Number(lines[2])
var D = Number(lines[3])
var E = Number(lines[4])
var X = Number(0)
if (A % 2 == 0) {
    X++
}
if (B % 2 == 0) {
    X++
}
if (C % 2 == 0) {
    X++
}
if (D % 2 == 0) {
    X++
}
if (E % 2 == 0) {
    X++
}
console.log(X + " valores pares")