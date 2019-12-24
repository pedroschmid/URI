var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var list1, list2, id1, id2, n1, n2, u1, u2, result;

list1 = lines[0].split(' ')
id1 = Number(list1[0])
n1 = Number(list1[1])
u1 = Number(list1[2])

list2 = lines[1].split(' ')
id2 = Number(list2[0])
n2 = Number(list2[1])
u2 = Number(list2[2])

result = (n1 * u1) + (n2 * u2)

console.log("VALOR A PAGAR: R$ " + result.toFixed(2))