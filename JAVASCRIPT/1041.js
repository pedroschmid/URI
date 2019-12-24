var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines[0].split(' ')

var x = parseFloat(valores[0])
var y = parseFloat(valores[1])


if (x === 0.0 && y === 0.0) {
    console.log("Origem")
} else {
    if (x == 0.0) {
        console.log("Eixo Y");
    } else {
        if (y == 0.0) {
            console.log("Eixo X");
        } else {
            if (x > 0.0 && y > 0.0) {
                console.log("Q1");
            } else {
                if (x < 0.0 && y > 0.0) {
                    console.log("Q2")
                } else {
                    if (x < 0.0 && y < 0.0) {
                        console.log("Q3");
                    } else {
                        console.log("Q4");
                    }
                }
            }
        }
    }
}