const axios = require('axios')
const API_KEY = '25f380e69779eacfe18a294d4679d939'

const getTemperature = async (lat, lng) => {
  const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?&APPID=${API_KEY}&lat=${lat}&lon=${lng}&units=metric`)
  if (data.cod !== 200) {
    throw new Error('No es posible obtener la temperatura')
  }

  const temperature = data.main.temp
  return temperature
}

module.exports = {
  getTemperature
}