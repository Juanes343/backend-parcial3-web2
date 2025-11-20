const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// Base de datos desactivada temporalmente

dotenv.config();

const app = express();

// Sin conexión a MongoDB por ahora; solo APIs activas

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/wikipedia', require('./routes/wikipediaRoutes'));
app.use('/api/resources', require('./routes/resourceRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
