var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = lines[0];
var ans = 0.0;

while(n--){
    ans+=6.0;
    ans = 1.0 / ans;
}

ans += 3.0;
console.log(ans.toFixed(10));