import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

import Cors from './cors';

class App {
  constructor() {
    this.server = express();
    this.routes();
  }

  routes() {
    this.server.use(Cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(routes);

    this.server.use(express.static(path.join(__dirname, '/')));

    this.server.get('/', function(req, res) {
      res.sendFile(
        path.join(__dirname, '..', '..', 'lojas-cms', 'public', 'index.html')
      );
    });

    this.server.get('/:file', function(req, res) {
      res.sendFile(
        path.join(__dirname, '..', '..', 'lojas-cms', 'public', req.params.file)
      );
    });
  }
}

export default new App().server;
