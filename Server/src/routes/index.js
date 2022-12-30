const siteRouter = require('./site');
const productRouter = require('./product');
const userRouter = require('./user');
const cartRouter = require('./cart');

function route(app) {
  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/products', productRouter);
  app.use('/api/v1/cart', cartRouter);

  app.use('/', siteRouter);
}

module.exports = route;
