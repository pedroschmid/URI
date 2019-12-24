var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var lista = lines[0].split(" ")
var n1 = Number(lista[0])
var n2 = Number(lista[1])
var n3 = Number(1)
var n = Number(0)

while (n < (n2 / n1)) {

    n++
    var i = Number(0)
    var string = ""

    for (i = 0; i < n1; i++) {

        if (i < (n1 - 1)) {
            string += (n3++ + " ")
        } else {
            string += (n3++)
        }

    }
    console.log(string)
}