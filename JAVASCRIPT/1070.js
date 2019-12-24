var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = Number(lines[0]);
var hmo = 6;
var i;

for (i = x; i < (x + (hmo * 2)); i += 2) {
    var odd;
    if (i % 2 == 0) {
        odd = i + 1;
        console.log(odd);
    } else {
        odd = i;
        console.log(odd);
    }
}