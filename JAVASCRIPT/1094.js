var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n, t = 0,
    c = 0,
    r = 0,
    s = 0,
    soma;
var n = lines[0];


for (i = 1; i <= n; i++) {
    var linha = lines[i].split(' ');
    var x = Number(linha[0]);
    var y = String(linha[1]);

    if (x > 0) {
        t += Number(x);

        if (y == 'C') {
            c += Number(x);
        } else if (y == 'R') {
            r += Number(x);
        } else if (y == 'S') {
            s += Number(x);
        }

    } else {
        break;
    }
}

somac = (c / t) * 100.00;
somacr = (r / t) * 100.00;
somas = (s / t) * 100.00;

console.log('Total: ' + t + ' cobaias');
console.log('Total de coelhos: ' + c);
console.log('Total de ratos: ' + r);
console.log('Total de sapos: ' + s);
console.log('Percentual de coelhos: ' + somac.toFixed(2) + ' %');
console.log('Percentual de ratos: ' + somacr.toFixed(2) + ' %');
console.log('Percentual de sapos: ' + somas.toFixed(2) + ' %');