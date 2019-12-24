var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines[0];
var num = lines[1].split(" ");

A = Number(num[0]);
B = Number(num[1]);

if (valores < (A + B)) {
    console.log("Deixa para amanha!");
} else {
    console.log("Farei hoje!");
}