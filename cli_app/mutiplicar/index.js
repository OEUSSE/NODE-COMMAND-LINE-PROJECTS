const fs = require('fs')
const colors = require('colors')

const multiplicar = (base, limite = 10) => {
  let result = ''
  for (let i = 1, x = limite; i <= x; i++) {
    result += `${base} * ${i} = ${base * i}\n`
  }
  return result
}

const listar = (base, limite) => {
  const result = multiplicar(base, limite)
  let header = `=============================\n======= Tabla del ${base} ========\n=============================\n`.green
  console.log(header)
  console.log(result.rainbow)
}

const crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) return reject('La base introducida no es un número.'.red)

    const result = multiplicar(base, limite)

    fs.writeFile(`./tablas/tabla-del-${base}.txt`, result, (err) => {
      if (err) reject(`${err}`.red)
      resolve(
        '[File]'.yellow +
        ` Tabla-del-${base}${limite ? `-al-${limite}` : ''} created `.white + '✔'.green
      )
    })
  })
}

module.exports = {
  crearArchivo,
  listar
}