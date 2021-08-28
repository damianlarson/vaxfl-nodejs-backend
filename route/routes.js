const express = require('express');

const router = express.Router();
const playerRouter = express.Router({ mergeParams: true });
const healthRouter = express.Router({ mergeParams: true });
require('./playerRoutes')(playerRouter);
require('./healthRoutes')(healthRouter);

if (process.env.expose_queries === 'true') {
  const queryRouter = express.Router({ mergeParams: true });
  // eslint-disable-next-line global-require
  require('./generateQueryRoutes')(queryRouter);
  router.use('/queries', queryRouter);
}

router.use('/players', playerRouter);
router.use('/health', healthRouter);

module.exports = router;
