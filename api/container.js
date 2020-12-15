const {
  asClass, asFunction, asValue, createContainer,
} = require('awilix');
const Startup = require('./startup');
const Server = require('./server');
const { HomeController } = require('./controllers');
const Routes = require('./routes');
const HomeRoutes = require('./routes/home/home.routes');
const config = require('../config/environments');

const container = createContainer();

container
  .register({
    app: asClass(Startup).singleton(),
    server: asClass(Server).singleton(),
  })
  .register({
    HomeController: asClass(HomeController).singleton(),
  })
  .register({
    routes: asFunction(Routes).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })
  .register({
    config: asValue(config),
  });

module.exports = container;
