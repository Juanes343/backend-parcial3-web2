const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const headers = {
      'User-Agent': 'parical3-web2/1.0 (contact: example@example.com)',
      'Accept': 'application/json'
    };
    const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,translations,region,cca3', { headers });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response.data));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Error al obtener países' }));
  }
};