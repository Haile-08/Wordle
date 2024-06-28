import { getScoreHandler, postScoreHandler } from "../controller/score.controller";

const scoreRoutHandler = (router) => {
  router.get('/score', getScoreHandler);
  router.post('/score', postScoreHandler);
};

export default scoreRoutHandler;