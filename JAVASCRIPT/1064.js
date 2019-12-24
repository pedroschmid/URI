var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines[0])
var B = Number(lines[1])
var C = Number(lines[2])
var D = Number(lines[3])
var E = Number(lines[4])
var F = Number(lines[5])
var X = Number(0)
var Y = Number(0)
if (A >= 0) {
    Y = Y + A
    X++
}
if (B >= 0) {
    Y = Y + B
    X++
}
if (C >= 0) {
    Y = Y + C
    X++
}
if (D >= 0) {
    Y = Y + D
    X++
}
if (E >= 0) {
    Y = Y + E
    X++
}
if (F >= 0) {
    Y = Y + F
    X++
}

console.log(X + " valores positivos")
console.log((Y / X).toFixed(1))