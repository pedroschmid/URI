var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var linha = lines[1].split(' ');
var n = linha[0];
var m = linha[1];
var x, y, i = 0;

while (1) {
    var contadora = Number(0)
    var k = Number(lines[contadora]);
    if (k == 0) {
        break;
    }
    for (i = 0; i < k; i++) {
        if (x == n || y == m) {
            console.log('divisa')
        } else if (x > n && y > m) {
            console.log('NE')
        } else if (x > n && y < m) {
            console.log('SE')
        } else if (x < n && y > m) {
            console.log('NO')
        } else if (x < n && y < m) {
            console.log('SO')
        }
    }
}
