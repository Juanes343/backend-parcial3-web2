const axios = require('axios');
const { parse } = require('url');
const ALLOWED = process.env.ALLOWED_ORIGIN || 'https://frontend-parcial3-web2.vercel.app';

module.exports = async (req, res) => {
  const origin = req.headers.origin || ALLOWED;
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '86400');
    return res.end();
  }
  try {
    const { query } = parse(req.url, true);
    const count = Math.min(Number(query.count) || 6, 10);
    const headers = {
      'User-Agent': 'parical3-web2/1.0 (contact: example@example.com)',
      'Accept': 'application/json'
    };
    const items = [];
    for (let i = 0; i < count; i++) {
      const r = await axios.get('https://es.wikipedia.org/api/rest_v1/page/random/summary', { headers });
      items.push({
        id: r.data.pageid || i,
        title: r.data.title,
        body: r.data.extract,
        url: r.data.content_urls?.desktop?.page,
      });
    }
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(items));
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Error al conectar con Wikipedia' }));
  }
};