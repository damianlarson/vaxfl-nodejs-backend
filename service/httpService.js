const axios = require('axios');

const get = (url, options) => axios.get(url, options);

module.exports = { get };
