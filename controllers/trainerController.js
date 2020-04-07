const { getTrainerById } = require('../services/trainerService');
const { getAllPokemonByTrainerId } = require('../services/pokemonService');

module.exports.getTrainerById = async (req, res) => {
    try {
        const trainerResponse = await getTrainerById(req.params.id);
        if (trainerResponse.rows && !trainerResponse.rows.length) {
            throw new Error('trainer not found');
        }
        const trainer = trainerResponse.rows[0];
        if (req.query.pokemon) {
            const pokemonResponse = await getAllPokemonByTrainerId(req.params.id);
            trainer.pokemon = pokemonResponse.rows.map(pkmn => {
                const { id, name, pokedex_id, image_url } = pkmn;
                return { id, name, pokedex_id, image_url };
            });
        }
        res.status(200).json(trainer);
    } catch (error) {
        res.json({ error: error.message });
    }
};
