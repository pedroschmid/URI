var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = Number(lines[0]) // a
var i = Number(0) // d

if (n > 0 && n < 10000) {
    for (i = 1; i <= n; i++) {
        if (i >= -10000000 && i <= 10000000) {
            var e = Number(lines[i])
            if (e != 0) {
                if (e % 2 == 0) {
                    if (e > 0) {
                        console.log("EVEN POSITIVE")
                    }
                    if (e < 0) {
                        console.log("EVEN NEGATIVE")
                    }
                }
                if (e % 2 != 0) {
                    if (e > 0) {
                        console.log("ODD POSITIVE")
                    }
                    if (e < 0) {
                        console.log("ODD NEGATIVE")
                    }
                }
            } else {
                console.log("NULL")
            }
        }
    }
}