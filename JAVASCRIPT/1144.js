var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = Number(lines[0]);
var b, c, d, e, f = parseInt(0);

for (b=1;b<=n;b++){
    c=b*b;
    d=b*b*b;
    console.log(b,c,d);
    e=c+1;
    f=d+1;
    console.log(b,e,f);
}