var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var l = Number(lines[0]);
var c = Number(lines[1]);

if (Math.abs(l-c)%2 != 0){
    console.log("0");
} else {
    console.log("1");
}