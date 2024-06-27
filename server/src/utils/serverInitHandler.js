/**
 * start the express server and catch error then exit
 * @param app express app
 */
const serverInitHandler = (app) =>{
  app.listen(5080, () => {
    console.log(`Development environment started listening to port 5080`);
  }).on('error', (err) => {
    console.log(err);
    process.exit();
  });
};

export default serverInitHandler;