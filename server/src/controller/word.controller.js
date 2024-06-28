import getRandomWord from "../utils/getRandomWord.js";

/**
  * Get a random word 
  * @param req request object
  * @param res response object
  */
const generateWordHandler = async (req, res, next) => {
  try {
    const { letterCount, repeated } = req.body;

    if (!letterCount || !repeated) {
      const error = new Error('Missing required fields');
      error.statusCode = 400; // Setting a custom status code
      return next(error);
    }

    getRandomWord(letterCount, repeated).then(word => {
      res.status(200).json({ word, success: true });
    }); 
  } catch (err) {
    const error = new Error(err.message);
    error.statusCode = 500; // Setting a custom status code
    return next(error);
  }
}

export default generateWordHandler;