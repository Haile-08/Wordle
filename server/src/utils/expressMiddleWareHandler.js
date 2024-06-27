import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

/**
 * Express server middleware
 * @param app express app
 */
const expressMiddleWareHandler = (app) =>{
  app.use(bodyParser.json());
  app.use(cors());
  app.use(morgan('common'));
};

export default expressMiddleWareHandler;