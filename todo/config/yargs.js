const opts = {
  descripcion: {
    demand: true,
    alias: 'd',
    desc: 'Descripción de una tarea por hacer'
  }
}

const argv = require('yargs')
  .command('crear', 'Crea una tarea por hacer', opts)
  .command('actualizar', 'Actualiza una tarea', {
    ...opts,
    completado: {
      alias: 'c',
      default: true,
      desc: 'Marca como completado o pendiente la tarea'
    }
  })
  .command('borrar', 'Elimina una tarea', opts)
  .help()
  .argv

module.exports = {
  argv
}