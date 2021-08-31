// Variable en entorno global
var nombre = 'Tom';
console.log("nombre", nombre);
// Constantes no permiten cambiar su valor
const apellido = 'Escobar';
console.log("apellido", apellido);

if (true) {
    // Variable solo en bloque donde se declara
    let nombre = 'Magnegto';
    console.log("nombre", nombre);
}

console.log("nombre", nombre);
