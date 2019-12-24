var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = lines[0];
var i;

if (n > 5 && n < 2000) {
    for (i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i + "^2 = " + i * i);
        }
    }
}