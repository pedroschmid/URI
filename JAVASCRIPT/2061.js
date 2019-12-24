var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha = lines[0].split(' ');
var n = linha[0];
var m = linha[1];
var s = String

for (i=0; i<m;i++){
    s = lines[i]
    if (s == "fechou"){
        n++;
    } else {
        n--;
    }
}

console.log(n);