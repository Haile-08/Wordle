import generateWordHandler from "../controller/word.controller.js";

const wordRoutHandler = (router) => {
    router.post('/word', generateWordHandler);
};
  
export default wordRoutHandler;