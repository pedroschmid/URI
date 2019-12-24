var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var t = lines[0];
var t1 = lines[1].split(' ');
var cnt = 0;

for (i = 0; i < 5; i++) {
    n = t1[i];
    if (t == n) {
        cnt++
    }
}
console.log(cnt)