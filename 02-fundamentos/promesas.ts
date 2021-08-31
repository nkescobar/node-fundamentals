import { empleados, salarios } from "./constants";

const getEmpleadoById = (id: number) => {
    const empleado = empleados.find((item) => item.id === id)?.nombre;
    return new Promise((resolve, reject) => {
        if(empleado) {
            resolve(empleado);
        } else {
            reject(`No existe el empleado con el id ${id}`);
        }
    });
}

getEmpleadoById(1).then(empleado => console.log(empleado))
.catch(err => console.log(err));

const getSalario = (id: number) => {
    const salario = salarios.find((item) => item.id === id)?.salario;
    return new Promise((resolve, reject) => {
        (salario) ?
            resolve(salario) :
            reject(`No existe el salario para el empleado  con el id ${id}`);
    });
}

getSalario(1).then(salario => console.log(salario))
.catch(err => console.log(err));

console.log('-----------')

const id = 3;
getEmpleadoById(id).then(empleado => {
    console.log('Empleado cadena',empleado)
    getSalario(id).then(salario => console.log('tiene salario',salario))
   .catch(err => console.log(err));
})
.catch(err => console.log(err));
console.log('-----------')

//Mejor forma
let nombre: any;

getEmpleadoById(id)
.then(empleado => {
    nombre = empleado
   return getSalario(id);
})
.then(salario => console.log(`El empleado  ${nombre}  tiene un salario ${salario}`))
.catch(err => console.log(err));