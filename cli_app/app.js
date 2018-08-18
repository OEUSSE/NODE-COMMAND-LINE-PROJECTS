const { argv } = require('./config/yargs')
const { crearArchivo, listar } = require('./mutiplicar')

const command = argv._[0], base = argv.base, limite = argv.limite

switch(command) {
  case 'listar':
    listar(base, limite)
    break;
  case 'crear':
    crearArchivo(base, limite)
      .then(response => console.log(response))
      .catch(err => console.error(err))
    break;
  default :
    console.log('Comando no conocido')
    break;
}

/* const argv = process.argv
const param = argv[2]
const base = param.split('=')[1]
 */

/* crearArchivo(base)
  .then(response => console.log(response))
  .catch(err => console.error(err))
 */