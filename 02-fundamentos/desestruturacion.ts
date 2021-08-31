const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 10,

    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

/*const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder;*/


console.log(deadpool.getNombre());


// desestructuracion

const {nombre, apellido, poder, edad = 10} = deadpool;
console.log(nombre, apellido, poder, edad);


function imprimeHeroe(heroe: any) {

    const {nombre, apellido, poder, edad = 10} = heroe;
    console.log('Imprimir heroe ',nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);


function imprimeHeroe2({nombre, apellido, poder, edad}: any) {
    nombre= 'Nasly';
    console.log('Imprimir heroe 2 ',nombre, apellido, poder, edad);
}

imprimeHeroe2(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [h1,,h3] = heroes;

console.log(h1,h3);