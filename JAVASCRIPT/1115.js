var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var i = 0
while (x != 0 || y != 0) {
    var linha = lines[i].split(' ');
    var x = Number(linha[0]);
    var y = Number(linha[1]);

    if (x > 0 && y > 0) {
        console.log("primeiro");
    }
    if (x < 0 && y > 0) {
        console.log("segundo");
    }
    if (x < 0 && y < 0) {
        console.log("terceiro");
    }
    if (x > 0 && y < 0) {
        console.log("quarto");
    }

    if (x == 0 || y == 0) {
        return 0;
    }
    i++
}