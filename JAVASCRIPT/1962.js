var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = lines[0];
var x = lines[1];
var year = 0;

for (i=1;i<=n;i++){
    x = lines[i];

    if (x < 2015){
        year = 2015 - x;
        console.log(year + ' D.C.');
    } else {
        year = x - 2014;
        console.log(year + ' A.C.');
    }
}