var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var x = Number(0)
var maiorNumeroAtual = Number(0)


for (x = 0; x < 100; x++) {

    var n = Number(lines[x])

    if (n > maiorNumeroAtual) {

        maiorNumeroAtual = n
        var contadora = Number(x)

    }
}

console.log(maiorNumeroAtual + "\n" + (contadora + 1))