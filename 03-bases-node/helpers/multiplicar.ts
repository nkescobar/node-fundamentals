const fs = require('fs');

const crearArchivoTabla = async(multiplo = 5) => {
    try {
        console.log('====================');
        console.log(`      Tabla del ${multiplo}     `);
        console.log('====================');
        let salida = '';
        for (let index = 0; index <= 10; index++) {
            salida = salida + (`${multiplo} X ${index} = ${multiplo * index}\n` );
        }
        console.log(salida);
        const nombreArchivo = `tabla-${multiplo}.txt`;
        fs.writeFileSync(`./03-bases-node/${nombreArchivo}`, salida)
        return nombreArchivo;
    } catch (error) {
        throw `Ha ocurrido un error creando el archivo`;
    }
}

module.exports = {
    crearArchivo: crearArchivoTabla
}