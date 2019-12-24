var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = (lines[0])

if (salario >= 0 && salario <= 400.00) {
    var novosalario = salario * 1.15;
    var reajusteganho = novosalario - salario;
    var percentual = "15 %";

    console.log("Novo salario: " + novosalario.toFixed(2));
    console.log("Reajuste ganho: " + reajusteganho.toFixed(2));
    console.log("Em percentual: " + percentual);

} else if (salario >= 400.01 && salario <= 800.00) {
    var novosalario = salario * 1.12;
    var reajusteganho = novosalario - salario;
    var percentual = "12 %";

    console.log("Novo salario: " + novosalario.toFixed(2));
    console.log("Reajuste ganho: " + reajusteganho.toFixed(2));
    console.log("Em percentual: " + percentual);

} else if (salario >= 800.01 && salario <= 1200.00) {
    var novosalario = salario * 1.10;
    var reajusteganho = novosalario - salario;
    var percentual = "10 %";

    console.log("Novo salario: " + novosalario.toFixed(2));
    console.log("Reajuste ganho: " + reajusteganho.toFixed(2));
    console.log("Em percentual: " + percentual);

} else if (salario >= 1200.01 && salario <= 2000.00) {
    var novosalario = salario * 1.07;
    var reajusteganho = novosalario - salario;
    var percentual = "7 %";

    console.log("Novo salario: " + novosalario.toFixed(2));
    console.log("Reajuste ganho: " + reajusteganho.toFixed(2));
    console.log("Em percentual: " + percentual);

} else {
    var novosalario = salario * 1.04;
    var reajusteganho = novosalario - salario;
    var percentual = "4 %"

    console.log("Novo salario: " + novosalario.toFixed(2));
    console.log("Reajuste ganho: " + reajusteganho.toFixed(2));
    console.log("Em percentual: " + percentual);
}