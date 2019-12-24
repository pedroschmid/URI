var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N, X, a, b, c, d=0;
N = Number(lines[0]);

for (a = 1; a < N; a++){
    X = Number(lines[a]);
    c = X / 2; d = 0;
    for (b = 1; b <= c; b++){
        if (X % b == 0){
            d+=b;
        }
        if (d == X){
            console.log(X + ' eh perfeito');
        } else {
            console.log(X + ' nao eh perfeito');
        }
    }
}