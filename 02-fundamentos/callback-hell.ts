import { empleados, salarios } from "./constants";

const getEmpleadoById = (id: number, callback:(err: any, empleado: any)=> void ) => {
    const empleado = empleados.find((item) => item.id === id)?.nombre;
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`El empleado con id ${id} no existe`, null);
    }
}
const getSalarios = (id: number, callback: (err:any, salario: any) => void) => {
    const salario = salarios.find(item => item.id === id)?.salario;
    if (salario) {
        callback(null, salario);
    } else {
        callback(`El salario con id ${id} no existe`, null);
    }
};
const id = 1;
// Callback hell
getEmpleadoById(id, (err: any, empleado: any) => {
    if (err) {
        console.error('ERROR');
        return console.log(err);
    }
    getSalarios(id, (err: any, salario: any) => {
        if (err) {
            console.error('ERROR');
            return console.log(err);
        }
        console.log('El empleado',empleado ,' tiene un salario de existe ', salario);
    } );
} );



/*
getSalarios(id, (err: any, empleado: any) => {
    if (err) {
        console.error('ERROR');
        return console.log(err);
    }
    console.log('salario existe ', empleado);
} );*/

