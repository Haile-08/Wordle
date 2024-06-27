/**
 * Handle express global error
 * @param app express app
 */
const expressGlobalErrorHandler = (app) =>{
  /**
   * Global error handler
   * @param error error object
   * @param req request object
   * @param res response object
   * @param next callback function
   */
  app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    return res.status(statusCode).json({
      status: statusCode,
      message,
    });
  });
};

export default expressGlobalErrorHandler;