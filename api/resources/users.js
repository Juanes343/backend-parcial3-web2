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
    const response = await axios.get('https://randomuser.me/api/?results=10&inc=name,email,login');
    const users = (response.data?.results || []).map((u, i) => ({
      id: u.login?.uuid || String(i),
      username: u.login?.username,
      name: `${u.name?.first || ''} ${u.name?.last || ''}`.trim(),
      email: u.email,
    }));
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Error al obtener usuarios' }));
  }
};