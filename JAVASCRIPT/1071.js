var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = Number(lines[0]);
var y = Number(lines[1]);
var tmp = 0;
var i;
var min, max;

if (x < y) {
    min = x;
    max = y;
} else {
    max = x;
    min = y;
}

for (i = (min + 1); i < max; ++i) {
    if (i % 2 == 1 || i % 2 == -1) {
        tmp += i;
    }

}
console.log(tmp);