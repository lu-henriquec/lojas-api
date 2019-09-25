import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
    this.routes();
    // this.exceptionHandler();
  }

  routes() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(routes);
    // this.server.use(Sentry.Handlers.errorHandler());
  }

  // exceptionHandler() {
  //   this.server.use(async (err, req, res, next) => {
  //     if (process.env.NODE_ENV === 'development') {
  //       const errors = await new Youch(err, req).toJSON();

  //       return res.status(500).json(errors);
  //     }

  //     return res.status(500).json({ error: 'Internal server error' });
  //   });
  // }
}

export default new App().server;
