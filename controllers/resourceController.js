const axios = require('axios');

// Fotos: Picsum (gratis, sin API key)
exports.getPhotos = async (req, res) => {
    try {
        const response = await axios.get('https://picsum.photos/v2/list?limit=12');
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener fotos' });
    }
};

// Países: RestCountries (incluye traducciones en español)
exports.getCountries = async (req, res) => {
    try {
        const headers = {
            'User-Agent': 'parical3-web2/1.0 (contact: example@example.com)',
            'Accept': 'application/json'
        };
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,translations,region,cca3', { headers });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener países' });
    }
};

// Usuarios: RandomUser con nacionalidad española
exports.getUsers = async (req, res) => {
    try {
        const headers = {
            'User-Agent': 'parical3-web2/1.0 (contact: example@example.com)',
            'Accept': 'application/json'
        };
        const response = await axios.get('https://randomuser.me/api/?results=12&nat=es', { headers });
        res.json(response.data.results);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};
