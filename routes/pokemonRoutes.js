const router = require('express').Router();
const {
    getAllPokemon,
    getPokemonById,
    addPokemon,
    deletePokemon
} = require('../controllers/pokemonController');

router.get('/', getAllPokemon);
router.get('/:id', getPokemonById);
router.post('/', addPokemon);
router.delete('/:id', deletePokemon);

module.exports = router;
