const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//console.log(argv._[0]);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        //console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        //console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}
//let argv2 = process.argv;

//console.log('Limite', argv.limite);

//console.log(argv.base);

//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1];