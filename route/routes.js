const express = require('express');

const router = express.Router();
const playerRouter = express.Router({ mergeParams: true });
const healthRouter = express.Router({ mergeParams: true });
require('./playerRoutes')(playerRouter);
require('./healthRoutes')(healthRouter);

router.use('/players', playerRouter);
router.use('/health', healthRouter);

module.exports = router;
