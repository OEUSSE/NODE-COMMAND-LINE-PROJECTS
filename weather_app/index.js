const { getCoords } = require('./place')
const { getTemperature } = require('./weather')

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad a obtener el clima',
    demand: true
  }
}).argv

const getInfo = async (address) => {
  try {
    const { formattedAddress, lat, lng } = await getCoords(address)
    const temp = await getTemperature(lat, lng)
    return `La temperatura en ${formattedAddress} es de ${temp}°C`
  } catch(e) {
    return `No es posible determinar el clima en ${address}`
  }
}

getInfo(argv.direccion)
  .then(res => console.log(res))
  .catch(error => console.log(error))