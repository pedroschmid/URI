var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = lines[0]
var i;

var inn = 0;
var out = 0;

for (i = 1; i <= n; i++) {
    var a = lines[i]
    if (a >= 10 && a <= 20) {
        inn++;
    } else {
        out++;
    }
}
console.log(inn + ' in');
console.log(out + ' out');