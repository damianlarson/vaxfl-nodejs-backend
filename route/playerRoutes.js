const db = require('../db/index');

const getAllPlayers = async (req, res) => {
  const { rows } = await db.query('SELECT full_name, player_position FROM players');
  res.send(rows);
};

const getADPs = async (req, res) => {
  const { scoringFormat } = req.params;
  const { service } = req.params || null;
  try {
    const { rows } = await db.query('SELECT full_name, player_position, team, adp, adp_formatted, high, low, stdev, bye, vaccination_status, vaccination_reference, is_vaccinated FROM players INNER JOIN adp ON (players.id = adp.player_id) WHERE scoring = $1 and ($2::text IS NULL or service = $2::text) ORDER BY adp ASC', [scoringFormat.toUpperCase(), service]);
    res.send(rows);
  } catch (err) {
    res.status(400);
    res.send({ error: 'Invalid format' });
  }
};

const playerRoutes = (router) => {
  router.get('/', getAllPlayers);
  router.get('/adp/:scoringFormat/:service?', getADPs);
};

module.exports = playerRoutes;
