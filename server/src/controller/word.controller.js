import getRandomWord from "../utils/getRandomWord.js";

/**
  * Get a random word 
  * @param req request object
  * @param res response object
  */
const generateWordHandler = async (req, res, next) => {
  const { letterCount, repeated } = req.body;
  console.log(repeated);

  if (!letterCount || !repeated) {
    const error = new Error('Missing required fields');
    error.statusCode = 400; // Setting a custom status code
    return next(error);
  }

  getRandomWord(letterCount, repeated).then(word => {
    res.status(200).json({ word, success: true });
});
}

export default generateWordHandler;