const axios = require('axios');
const ORIGIN = process.env.ALLOWED_ORIGIN || 'https://frontend-parcial3-web2.vercel.app';

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.setHeader('Access-Control-Allow-Origin', ORIGIN);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '86400');
    return res.end();
  }
  try {
    const headers = {
      'User-Agent': 'parical3-web2/1.0 (contact: example@example.com)',
      'Accept': 'application/json'
    };
    const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,translations,region,cca3', { headers });
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', ORIGIN);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response.data));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Access-Control-Allow-Origin', ORIGIN);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Error al obtener países' }));
  }
};