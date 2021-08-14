const express = require('express');

const router = express.Router();
const playerRouter = express.Router({ mergeParams: true });

require('./playerRoutes')(playerRouter);

router.use('/players', playerRouter);
module.exports = router;
