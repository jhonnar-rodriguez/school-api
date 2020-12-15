const container = require('./api/container');

const application = container.resolve('app');

application
  .start()
  .catch((err) => {
    console.log(`Something went wrong starting the server. ${err}`);
    process.exit();
  });
