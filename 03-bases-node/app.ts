const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('yargs').argv;

console.clear();

console.log(process.argv)
console.log(argv)

const multiplo= 2;

crearArchivo(multiplo)
    .then((nombreArchivo: string) => {
        console.log(nombreArchivo, 'creado');
    }).catch((err: string) => {
        console.log(err, 'Hubo un error');
    });

