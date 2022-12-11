const siteRouter = require("./site");
const globalErrorHandler = require("./errorHandler");

function route(app) {
  app.use("/", siteRouter);

  // handle all middleware error
  app.use(globalErrorHandler);
}

module.exports = route;
