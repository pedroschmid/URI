var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var i, j, value = parseFloat();
var temp, temp2 = parseInt();

for (i = 0, j = 1, value = 0, temp = 0, temp2 = 0; i < 2.1; j++) {
    if (temp2 == 0) {
        console.log("I=" + i.toFixed(0) + " J=" + j.toFixed(0))
    } else {
        console.log("I=" + i.toFixed(1) + " J=" + j.toFixed(1))
    }

    temp++

    if (temp == 3) {
        i += 0.2
        value += 0.2;
        j = value;
        temp = 0;
        temp2++;
    }

    if (temp2 == 5) {
        temp2 = 0;
    }
}