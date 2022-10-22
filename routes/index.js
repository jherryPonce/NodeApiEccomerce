const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const subCategoriesRouter = require('./subCategoriesRouter')
const ordenesRouter = require('./ordenRouter')


const parentRoute = '/api/v1';
//recibe la aplicacion
function routerApi(app){
  //aca definimos el endpoint
  app.use(parentRoute + '/products', productsRouter);
  app.use(parentRoute + '/users', usersRouter);
  app.use(parentRoute + '/categories', categoriesRouter);
  app.use(parentRoute + '/subcategories', subCategoriesRouter);
  app.use(parentRoute + '/ordenes', ordenesRouter);

}

module.exports = routerApi;
