const db = require('../db/index');

const getAllPlayers = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT name, player_position FROM players');
    res.send(rows);
  } catch (err) {
    res.send(err);
  }
};

const getADPs = async (req, res) => {
  const { scoringFormat } = req.params;
  const { service } = req.params || null;
  try {
    const { rows } = await db.query('SELECT players.name, player_position, team, adp, adp_formatted, high, low, stdev, bye, vaccination_status, vaccination_reference, is_vaccinated FROM players INNER JOIN adp ON (players.name = adp.name) WHERE scoring = $1 and ($2::text IS NULL or service = $2::text) ORDER BY adp ASC', [scoringFormat.toUpperCase(), service]);
    res.send(rows);
  } catch (err) {
    res.status(500);
    res.send({ error: 'Unable to complete the transaction' });
  }
};

const playerRoutes = (router) => {
  router.get('/', getAllPlayers);
  router.get('/adp/:scoringFormat/:service?', getADPs);
};

module.exports = playerRoutes;
