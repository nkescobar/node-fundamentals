setTimeout(() => {
    console.log('hola mundo');
}, 1000);

const getUsuarioById = (id: number, callback: Function) => {
    const usuario = {
        id,
        nombre: 'Nasly'
    };

    setTimeout(()=> {
        callback(usuario);
    },1500);
};
// Callbacks Una funcion que se manda como argumento a otra funcion
getUsuarioById(10, (usuario: any) => {
    console.log('Hola ', usuario.nombre.toUpperCase());
});