var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linhas = Number(lines[0])
var contadoraUm = Number(1)


for (x = 0; x < linhas; x++) {

    var list = lines[contadoraUm].split(' ')

    var n1 = Number(list[0])
    var n2 = Number(list[1])
    var n3 = Number(list[2])

    var mediaPonderada = (((n1 * 2) + (n2 * 3) + (n3 * 5)) / (2 + 3 + 5))

    console.log(mediaPonderada.toFixed(1))

    contadoraUm++

}