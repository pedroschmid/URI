var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var i, j;

for (i = 1; i <= 9; i += 2) {
    for (j = i + 6; j >= i + 4; j--) {
        console.log("I=" + i + " J=" + j);
    }
}