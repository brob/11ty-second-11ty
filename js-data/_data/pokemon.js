const axios = require('axios');

module.exports = async function () {
    // pokemon api call
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
    const pokemon = response.data.results;

    return pokemon
}