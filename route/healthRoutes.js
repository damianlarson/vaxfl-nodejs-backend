const healthCheck = (req, res) => {
  res.send('Alive!');
};

const healthRoutes = (router) => {
  router.get('/', healthCheck);
};

module.exports = healthRoutes;
