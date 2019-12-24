var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = Number(0);
var b = Number(0);
for (i = 0; i != -1; i = i + 1) {
    var n = Number(lines[i]);
    if (n > 10 || n < 0) {
        console.log("nota invalida");
    } else if (n >= 0 && n <= 10 && b === 0) {
        a += n;
        b++;
    } else if (n >= 0 && n <= 10 && b == 1) {
        a = (a + n) / 2;
        console.log("media = " + a.toFixed(2));
        break;
    }
}