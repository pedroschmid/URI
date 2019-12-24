var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = lines[0].split(' ')

var A = Number(X[0])
var B = Number(X[1])
var C = Number(X[2])

if (A < (B + C) && B < (A + C) && C < (A + B)) {

    var Y = A + B + C

    console.log("Perimetro = " + Y.toFixed(1))

} else {

    var Z = (A + B) * C / 2

    console.log("Area = " + Z.toFixed(1))
}