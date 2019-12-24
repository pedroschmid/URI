var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = Number(lines[0]);

for (i = 1; i <= n; i++) {

    var n1 = Number(lines[i]);

    for (a = 2; a <= (n1 - 1); a++) {

        if (n1 % a === 0) {

            console.log(n1 + " nao eh primo");
            break;

        }
    }

    if (n1 == a) {
        console.log(n1 + " eh primo");

    }
}