import express = require('express');
import http = require('http');

const port = 5555;

process.env.apiUrl = `http://localhost:${port}`;

module.exports = () => {
  const app: express.Express = express();

  app.use((__, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    res.header('date', '1');
    res.header('etag', '1');
    next();
  });

  app.get('/json', (__, res) => {
    res.status(200).send({ name: 'john' });
  });

  const server: http.Server = http.createServer(app);
  server.listen(port);
  (global as any).serverApp = server;
};
