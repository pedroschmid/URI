var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var area = lines.shift().split(" ");

var A = parseFloat(area[0]);
var B = parseFloat(area[1]);
var C = parseFloat(area[2]);

console.log('TRIANGULO: ' + ((A * C) / 2).toFixed(3));
console.log('CIRCULO: ' + ((3.14159 * (C * C))).toFixed(3));
console.log('TRAPEZIO: ' + (((A + B) * C) / 2).toFixed(3));
console.log('QUADRADO: ' + (B * B).toFixed(3));
console.log('RETANGULO: ' + (A * B).toFixed(3));