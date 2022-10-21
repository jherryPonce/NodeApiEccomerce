const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');

const parentRoute = '/api/v1';
//recibe la aplicacion
function routerApi(app){
  //aca definimos el endpoint
  app.use(parentRoute + '/products', productsRouter);
  app.use(parentRoute + '/users', usersRouter);
  app.use(parentRoute + '/categories', categoriesRouter);
}

module.exports = routerApi;
