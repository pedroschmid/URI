var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = Number(lines[0]);

for (i=1; i <= n;i++){
    var c = parseInt(lines[i]);

    if (c <= 8000){
        console.log('Inseto!');
    } else {
        console.log('Mais de 8000!');
    }
}