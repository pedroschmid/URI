var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var string = Number(lines[0]);

if (string <= 800) {
    console.log(1);
} else if (string > 800 && string <= 1400) {
    console.log(2);
} else {
    console.log(3)
}