var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x, i;
var j = 65

for (i = 1; i < 40; i = i + 3) {
    x = i;

    if (j <= 65) {
        j = j - 5

        console.log("I=" + x + " J=" + j)
    }


}