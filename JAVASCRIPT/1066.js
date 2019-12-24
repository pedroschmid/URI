var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n, i;
var pos = parseInt(0);
var neg = parseInt(0);
var par = parseInt(0);
var imp = parseInt(0);

for (i = 0; i < 5; i++) {
    n = parseInt(lines[i]);
    if (n > 0) {
        pos++;
    } else {
        if (n != 0) {
            neg++;
        }
    }
    if (n % 2 == 0) {
        par++;
    } else {
        imp++;
    }
}

console.log(par + " valor(es) par(es)");
console.log(imp + ' valor(es) impar(es)');
console.log(pos + ' valor(es) positivo(s)');
console.log(neg + ' valor(es) negativo(s)');