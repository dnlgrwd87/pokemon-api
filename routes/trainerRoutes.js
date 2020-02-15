const router = require('express').Router();
const { getTrainerById } = require('../controllers/trainerController');
const { getAllPokemonByTrainerId } = require('../controllers/pokemonController');

router.get('/:id', getTrainerById);
router.get('/:id/pokemon', getAllPokemonByTrainerId);

module.exports = router;
