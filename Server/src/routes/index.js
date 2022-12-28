const siteRouter = require('./site');
const productRouter = require('./product');

function route(app) {
  app.use('/', siteRouter);

  app.use('/api/v1/products', productRouter);


}

module.exports = route;
