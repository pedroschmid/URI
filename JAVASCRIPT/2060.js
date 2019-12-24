var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = lines[0];
var space = lines[1].split(' ');
var x = space[0];

var cnt2=0;
var cnt3=0;
var cnt4= 0; 
var cnt5=0;

for (i=0; i<n;i++){
    x = space[i];

    if (x%2 == 0){
        cnt2++;
    } if (x%3 == 0){
        cnt3++;
    } if (x%4 == 0){
        cnt4++;
    } if (x%5 == 0){
        cnt5++
    }
}

console.log(cnt2 + ' Multiplo(s) de 2');
console.log(cnt3 + ' Multiplo(s) de 3');
console.log(cnt4 + ' Multiplo(s) de 4');
console.log(cnt5 + ' Multiplo(s) de 5');