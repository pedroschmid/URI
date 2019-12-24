var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = Number(lines[0]);
var i;

if (n % 2 == 0) {
    n = n - 1
}
for (i = 1; i <= n; i += 2) {
    console.log(i)
}