var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var x = lines[0];

for (i = 0; i < x; i++) {

    var y = lines[i + 1].split(' ');
    var a = Number(y[0]);
    var b = Number(y[1]);
    var c = a / b;
    var d = c + 1;

    if (a % b === 0) {
        console.log(c.toFixed(0));
    } else {
        console.log(Math.floor(d));
    }


}