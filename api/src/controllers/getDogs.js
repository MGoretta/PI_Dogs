const { API_KEY } = process.env;
const axios = require('axios');

let urLink = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`

const getApiData = async() => { 
    const apiData = await axios.get(urLink);
return apiData;
}