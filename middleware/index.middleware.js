import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from '../routes/index.routes.js';
import errorHandler from './error.middleware.js';
import notFoundMiddleware from './not-found.middleware.js';

const middleware = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  app.use(router);
  app.use(notFoundMiddleware);
  app.use(errorHandler);
};

export default middleware;