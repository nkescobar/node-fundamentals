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

const getSalario = (id: number) => {
    const salario = salarios.find((item) => item.id === id)?.salario;
    return new Promise((resolve, reject) => {
        (salario) ?
            resolve(salario) :
            reject(`No existe el salario para el empleado  con el id ${id}`);
    });
}

// async - await
// El await solo es valido dentro de una funcion asincrona
const id = 3;
const getInfoUsuario = async() => {
    try {
        const empleado = await getEmpleadoById(id);
        const salario = await getSalario(id);
        return `El empleado ${empleado} tiene un salario de ${salario}`;
    } catch(err) {
        return err;
    }
}

getInfoUsuario()
.then(response => console.log(response))
.catch(error => console.log(error));