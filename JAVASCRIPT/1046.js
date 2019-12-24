var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines[0].split(' ')

var a = parseInt(valores[0])
var b = parseInt(valores[1])

if (a == b) {
    var tempo = 24 - a + b;
    console.log("O JOGO DUROU " + tempo + " HORA(S)");
} else if (a <= b) {
    tempo = b - a;
    console.log("O JOGO DUROU " + tempo + " HORA(S)");
} else {
    tempo = 24 - a + b;
    console.log("O JOGO DUROU " + tempo + " HORA(S)");
}