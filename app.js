const fs = require('fs');
const path = require('path');

let destino = path.resolve(__dirname, 'data/tarea.json');

let data = fs.readFileSync(destino);
let dataDescomprimida = JSON.parse(data);

switch (process.argv[2]) {
    case 'listar':
        listar();
        break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción \nLas acciones disponibles son:listar');
        break;
        default:
            console.log(`No entiendo que quieres hacer\nLas acciones disponibles son:listar`);
            break;
}

function listar () {
    console.log('Listado de tareas');
    console.log('--------------------------------');
    dataDescomprimida.forEach((element, i) => {
    console.log(`${i + 1}. ${element.titulo} - ${element.estado}`);

    console.log(i + 1 +'. ' + element.titulo + ' - ' + element.estado);
});
}





