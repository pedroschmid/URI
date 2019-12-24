var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var total = parseInt(lines[0]);
var horas = Math.floor(total / 3600);
var minutos = Math.floor((total % 3600) / 60);
var segundos = total % 60;

console.log(Math.trunc(horas) + ":" + Math.trunc(minutos) + ":" + segundos)