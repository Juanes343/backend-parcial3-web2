const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Error al obtener usuarios' }));
  }
};