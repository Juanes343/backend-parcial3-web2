module.exports = async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`<!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="utf-8" />
      <title>Backend</title>
      <style>
        body { font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; padding: 2rem; }
        code { background:#f3f3f3; padding: .2rem .4rem; border-radius: 4px; }
      </style>
    </head>
    <body>
      <h1>Servidor backend corriendo ✅</h1>
      <p>Endpoints disponibles:</p>
      <ul>
        <li><code>/api/wikipedia?count=6</code></li>
        <li><code>/api/resources/photos</code></li>
        <li><code>/api/resources/countries</code></li>
      </ul>
    </body>
  </html>`);
};