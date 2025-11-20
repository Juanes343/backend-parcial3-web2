const axios = require('axios');
const ORIGIN = process.env.ALLOWED_ORIGIN || 'https://frontend-parcial3-web2.vercel.app';

module.exports = async (req, res) => {
  const origin = req.headers.origin || ORIGIN;
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '86400');
    return res.end();
  }
  try {
    const response = await axios.get('https://picsum.photos/v2/list?limit=12');
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response.data));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Error al obtener fotos' }));
  }
};