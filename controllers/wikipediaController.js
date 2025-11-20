const axios = require('axios');

// API Wikipedia (ES): obtiene resúmenes aleatorios
exports.getWikipediaArticles = async (req, res) => {
    try {
        const count = Math.min(Number(req.query.count) || 6, 10);
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
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al conectar con Wikipedia');
    }
};
