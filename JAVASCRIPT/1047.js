var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines[0].split(' ')

var h1 = parseInt(valores[0]);
var m1 = parseInt(valores[1]);
var h2 = parseInt(valores[2]);
var m2 = parseInt(valores[3]);

var rt = h2 - h1;

if (rt < 0) {
    rt = 24 + (h2 - h1);
}

var rm = m2 - m1;

if (rm < 0) {
    rm = 60 + (m2 - m1);
    rt--;
}

if (h2 == h1 && m2 == m1) {
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
    console.log("O JOGO DUROU " + rt + " HORA(S) E " + rm + " MINUTO(S)")
}