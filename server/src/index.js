import express from 'express';
import {  expressGlobalErrorHandler, expressMiddleWareHandler, serverInitHandler } from './utils/index.js';
import expressRouteHandler from './routes/routes.js';


const app = express();

// connect to mongodb
expressConnectDB();

// handle express middleware
expressMiddleWareHandler(app);

// handle express routes
expressRouteHandler(app);

// handle global errors
expressGlobalErrorHandler(app);

// handle express initialization
serverInitHandler(app);

export default app;