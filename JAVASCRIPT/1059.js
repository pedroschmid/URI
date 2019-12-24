var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var i = parseInt(lines[0]);

i;

for (i = 1; i <= 100; i = i + 1) {
    if (i % 2 == 0) {
        console.log(i)
    }
}