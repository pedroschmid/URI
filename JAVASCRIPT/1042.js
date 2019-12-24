var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = lines[0].split(' ')

var A = Number(X[0])
var B = Number(X[1])
var C = Number(X[2])

if (A > B && A > C) {
    if (B > C) {
        console.log(C + "\n" + B + "\n" + A + "\n")
    } else if (C > B) {
        console.log(B + "\n" + C + "\n" + A + "\n")
    }
} else if (B > A && B > C) {
    if (A > C) {
        console.log(C + "\n" + A + "\n" + B + "\n")
    } else if (C > A) {
        console.log(A + "\n" + C + "\n" + B + "\n")
    }
} else if (C > A && C > B) {
    if (B > A) {
        console.log(A + "\n" + B + "\n" + C + "\n")
    } else if (A > B) {
        console.log(B + "\n" + A + "\n" + C + "\n")
    }
}
console.log(A + "\n" + B + "\n" + C)