/*
EJERCICIO 10:
Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.

Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor
*/

// Constantes para las cantidades de estudiantes
const CANT_MANIANA = 5;
const CANT_TARDE = 6;
const CANT_NOCHE = 11;
const EDAD_MAXIMA = 100;

function pedirEdades(cantidad, nombreTurno) {
    const edades = [];
    for (let i = 1; i <= cantidad; i++) {
        let edad;
        do {
            const input = prompt(`Ingrese la edad #${i} del turno ${nombreTurno} (entre 1 y ${EDAD_MAXIMA} años):`);
            edad = parseInt(input, 10);
        } while (isNaN(edad) || edad <= 0 || edad > EDAD_MAXIMA);
        edades.push(edad);
    }
    return edades;
}

function promedio(array) {
    return array.reduce((suma, edad) => suma + edad, 0) / array.length;
}

// Función para formatear números (quita decimales si son .00)
function formatearPromedio(num) {
    return num % 1 === 0 ? num.toString() : num.toFixed(2);
}

document.getElementById("calcular").addEventListener("click", () => {
    const maniana = pedirEdades(CANT_MANIANA, "mañana");
    const tarde = pedirEdades(CANT_TARDE, "tarde");
    const noche = pedirEdades(CANT_NOCHE, "noche");

    const promManiana = promedio(maniana);
    const promTarde = promedio(tarde);
    const promNoche = promedio(noche);

    const salida = document.getElementById("salida");
    salida.innerHTML = `
    <h2>Resultados</h2>
    <p class="resultado">Promedio turno mañana: ${formatearPromedio(promManiana)} años</p>
    <p class="resultado">Promedio turno tarde: ${formatearPromedio(promTarde)} años</p>
    <p class="resultado">Promedio turno noche: ${formatearPromedio(promNoche)} años</p>
  `;

    // Determinar turno con mayor promedio
    const promedios = [
        { turno: "mañana", valor: promManiana },
        { turno: "tarde", valor: promTarde },
        { turno: "noche", valor: promNoche }
    ];

    // Ordenar de mayor a menor
    promedios.sort((a, b) => b.valor - a.valor);

    let mensaje;
    if (promedios[0].valor === promedios[1].valor) {
        // Hay empate
        const turnosEmpate = [];
        const maxValor = promedios[0].valor;

        promedios.forEach(p => {
            if (p.valor === maxValor) turnosEmpate.push(p.turno);
        });

        mensaje = `Empate en el mayor promedio entre los turnos: ${turnosEmpate.join(', ')}`;
    } else {
        mensaje = `El turno ${promedios[0].turno} tiene el mayor promedio`;
    }

    salida.innerHTML += `<p class="resultado destacado">${mensaje}</p>`;
});