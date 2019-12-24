var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines[0].split(' ')

p = parseInt(valores[0]);
j1 = parseInt(valores[1]);
j2 = parseInt(valores[2]);
r = parseInt(valores[3])
a = parseInt(valores[4]);

if (r == 1 && a == 0) {
    console.log("Jogador 1 ganha!")
} else if (r == 0 && a == 1) {
    console.log("Jogador 1 ganha!")
} else if (r == 1 && a == 1) {
    console.log("Jogador 2 ganha!")
} else {
    if (p == 1) {
        if ((j1 + j2) % 2 == 0) {
            console.log("Jogador 1 ganha!")
        } else {
            console.log("Jogador 2 ganha!")
        }
    } else if (p == 0) {
        if ((j1 + j2) % 2 != 0) {
            console.log("Jogador 1 ganha!")
        } else {
            console.log("Jogador 2 ganha!")
        }
    }
}