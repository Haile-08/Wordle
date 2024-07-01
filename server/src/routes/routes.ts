import { Express, Router } from 'express';
import scoreRoutHandler from './score.routes'; // Assuming this is a TypeScript file
import wordRoutHandler from './word.routes'; // Assuming this is a TypeScript file

/**
 * Route handler to add routes to the Express application
 * @param app Express app instance
 */
const expressRouteHandler = (app: Express) => {
  const router = Router();
  
  // API versioning
  app.use('/v1', router);
  
  // Register route handlers
  wordRoutHandler(router);
  scoreRoutHandler(router);
};

export default expressRouteHandler;
