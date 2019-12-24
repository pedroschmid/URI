var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var notas = lines[0].split(' ')
var novaNota = Number(lines[1])

var a = Number(notas[0])
var b = Number(notas[1])
var c = Number(notas[2])
var d = Number(notas[3])

var mediaPonderada = (a * 2 + b * 3 + c * 4 + d * 1) / 10

if (mediaPonderada >= 7) {
    console.log("Media: " + mediaPonderada.toFixed(1))
    console.log("Aluno aprovado.")
}

if (mediaPonderada < 5) {
    console.log("Media: " + mediaPonderada.toFixed(1))
    console.log("Aluno reprovado.")
}

if (mediaPonderada >= 5 && mediaPonderada <= 6.9) {
    var novaMedia = (novaNota + mediaPonderada) / 2

    if (novaMedia >= 5) {
        console.log("Media: " + mediaPonderada.toFixed(1))
        console.log("Aluno em exame.")
        console.log("Nota do exame: " + novaNota.toFixed(1))
        console.log("Aluno aprovado.")
        console.log("Media final: " + novaMedia.toFixed(1))
    } else if (novaMedia <= 4.9) {
        console.log("Media: " + mediaPonderada.toFixed(1))
        console.log("Aluno em exame.")
        console.log("Nota do exame: " + novaNota.toFixed(1))
        console.log("Aluno reprovado.")
        console.log("Media final: " + novaMedia.toFixed(1))
    }
}