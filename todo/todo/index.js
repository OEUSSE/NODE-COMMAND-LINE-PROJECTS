const fs = require('fs')

let todo = []

const guardarDB = _ => {
  let data = JSON.stringify(todo)
  fs.writeFile('./db/data.json', data, err => {
    if (err) throw new Error('No se pudo crear la tarea')
  })
}

const cargarDB = _ => {
  try {
    todo = require('../db/data.json')
  } catch (error) {
    todo = []
  }
}

const crear = (descripcion) => {
  cargarDB()

  let porHacer = {
    descripcion,
    completado: false
  }

  todo.push(porHacer)
  guardarDB()
  return porHacer
}

const obtenerListado = _ => {
  cargarDB()
  return todo
}

const actualizar = (descripcion, completado = true) => {
  cargarDB()
  let index = todo.findIndex(task => task.descripcion === descripcion)

  if (index >= 0) {
    todo[index].completado = completado
    guardarDB()
    return true
  } else {
    return false
  }
}

const borrar = (descripcion) => {
  cargarDB()

  let nuevoListado = todo.filter(task => task.descripcion !== descripcion)

  if (nuevoListado.length === todo.length) {
    return false
  } else {
    todo = nuevoListado
    guardarDB()
    return true
  }
}

module.exports = {
  crear,
  obtenerListado,
  actualizar,
  borrar
}