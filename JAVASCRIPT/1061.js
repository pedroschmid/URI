var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dia = lines[0].split('Dia ')
var horaInicio = lines[1].split(' : ')
var diaFim = lines[2].split('Dia ')
var horaFim = lines[3].split(' : ')


var diaInicioA = dia[1]

var horaInicioA = horaInicio[0]
var minutoInicioB = horaInicio[1]
var segundoInicioC = horaInicio[2]

var diaFimA = diaFim[1]

var horaFimA = horaFim[0]
var minutoFimB = horaFim[1]
var segundoFimC = horaFim[2]

var duracaoDia = 0
var duracaoHora = 0
var duracaoMinuto = 0
var duracaoSegundo = 0

var bool_Horas = new Boolean(false);
var bool_Minutos = new Boolean(false);
var bool_Segundos = new Boolean(false);


if (horaInicioA > horaFimA)
    bool_Horas = true;
if (minutoInicioB > minutoFimB)
    bool_Minutos = true;
if (segundoInicioC > segundoFimC)
    bool_Segundos = true;

while (diaInicioA != diaFimA) {
    duracaoDia++;
    diaInicioA++;
}

while (horaInicioA != horaFimA) {
    duracaoHora++;
    horaInicioA++;
    if (horaInicioA == 25)
        horaInicioA = 1;
}

while (minutoInicioB != minutoFimB) {
    duracaoMinuto++;
    minutoInicioB++;
    if (minutoInicioB == 61)
        minutoInicioB = 1;
}

while (segundoInicioC != segundoFimC) {
    duracaoSegundo++;
    segundoInicioC++;
    if (segundoInicioC == 61)
        segundoInicioC = 1;
}

if (bool_Horas == true)
    duracaoDia--;
if (bool_Minutos == true)
    duracaoHora--;
if (bool_Segundos == true)
    duracaoMinuto--;



console.log(duracaoDia + " dia(s)")
console.log(duracaoHora + " hora(s)")
console.log(duracaoMinuto + " minuto(s)")
console.log(duracaoSegundo + " segundo(s)")