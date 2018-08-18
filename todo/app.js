const { argv } = require('./config/yargs')
const colors = require('colors')
const { crear, obtenerListado, actualizar, borrar } = require('./todo')

const command = argv._[0], descripcion = argv.descripcion, completado = argv.completado

switch (command) {
  case 'crear':
    const task = crear(descripcion)
    console.log(task)
    break;
  case 'listar':
    let listado = obtenerListado()

    for (let task of listado) {
      console.log('======== Por Hacer ========'.green)
      console.log(task.descripcion)
      console.log('Estado: ', task.completado)
      console.log('==========================='.green)
    }

    break;
  case 'actualizar':
    let actualizado = actualizar(descripcion, completado)
    console.log(actualizado)
    break;
  case 'borrar':
    let borrado = borrar(descripcion)
    console.log(borrado)
    break;
  default:
    console.log('Comando no valido')
    break;
}