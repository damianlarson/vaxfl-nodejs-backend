const getPlayers = (req, res) => {
  res.send('Getting players');
};

const getPlayersRoute = (router) => {
  router.get('/adp', getPlayers);
};

module.exports = getPlayersRoute;
