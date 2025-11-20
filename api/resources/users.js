const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=10&inc=name,email,login');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response.data));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Error al obtener usuarios' }));
  }
};