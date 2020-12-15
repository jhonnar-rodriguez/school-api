const cors = require('cors');
const { Router } = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

module.exports = ({ HomeRoutes }) => {
  const router = Router();
  const apiRoutes = Router();

  apiRoutes
    .use(cors())
    .use(bodyParser.json())
    .use(compression());

  // Main routes
  router.use('/', HomeRoutes);

  // API Routes
  // apiRoutes.use('/', HomeRoutes);
  router.use('/api', apiRoutes);

  return router;
};
