const express = require('express');

const router = express.Router();

require('./playerRoutes')(router);

module.exports = router;
