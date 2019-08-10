import express = require('express');
import http = require('http');

module.exports = () => {
  const app: express.Express = express();

  app.use((__, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
  });

  app.get('/json', (__, res) => {
    res.status(200).json({ name: 'john' });
  });

  const server: http.Server = http.createServer(app);
  server.listen(5555);
  (global as any).serverApp = server;
};
