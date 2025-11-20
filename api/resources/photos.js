const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get('https://picsum.photos/v2/list?limit=12');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response.data));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Error al obtener fotos' }));
  }
};