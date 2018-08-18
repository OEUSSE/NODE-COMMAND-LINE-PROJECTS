const axios = require('axios')
const API_KEY = 'AIzaSyARe-TWhmI-UNytY9ocjwrYRhYa95l-Fbw'

const getCoords = async (address) => {
  const encodedAddress = encodeURI(address)
  const { data } = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${API_KEY}`)

  if (data.status === 'ZERO_RESULTS' || !data.results.length) {
    throw new Error(`No hay resultados para la ciudad ${address}`)
  }

  const results = data.results[0]
  const formattedAddress = results.formatted_address
  const { lat, lng } = results.geometry.location

  return {
    formattedAddress,
    lat,
    lng
  }
}

module.exports = {
  getCoords
}