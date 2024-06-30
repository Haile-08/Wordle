import express from 'express';
import scoreRoutHandler from './score.routes.js';
import wordRoutHandler from './word.routes.js';

/**
 * route handler to the express application
 * @param app express app
 */
const expressRouteHandler = (app) => {
  const router = express.Router();
  
  // Api versioning
  app.use('/v1', router);
  
  // // auth router
  // scoreRoutHandler(router);
  wordRoutHandler(router);
  scoreRoutHandler(router);
};

export default expressRouteHandler;
