var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dias = parseInt(lines[0]);

var anos, meses;

anos = dias / 365;
meses = (dias % 365) / 30;
dias = (dias % 365) % 30;

console.log(Math.trunc(anos) + " ano(s)");
console.log(Math.trunc(meses) + " mes(es)");
console.log(Math.trunc(dias) + " dia(s)");