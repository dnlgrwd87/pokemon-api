const {
    getAllPokemon,
    getPokemonById,
    addPokemon,
    deletePokemon,
    getAllPokemonByTrainerId
} = require('../services/pokemonService');

module.exports.getAllPokemon = async (req, res) => {
    try {
        const response = await getAllPokemon();
        return res.status(200).json(response.rows);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports.getPokemonById = async (req, res) => {
    try {
        const response = await getPokemonById(req.params.id);
        if (response.rows && !response.rows.length) throw new Error('Not found');
        return res.status(200).json(response.rows[0]);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports.addPokemon = async (req, res) => {
    try {
        const response = await addPokemon(req.body);
        return res.status(200).json(response.rows[0]);
    } catch (error) {
        res.json(error);
    }
};

module.exports.deletePokemon = async (req, res) => {
    try {
        await deletePokemon(req.params.id);
        return res.status(200).json({});
    } catch (error) {
        res.json(error);
    }
};

module.exports.getAllPokemonByTrainerId = async (req, res) => {
    try {
        const response = await getAllPokemonByTrainerId(req.params.id);
        return res.status(200).json(response.rows);
    } catch (error) {
        res.json(error);
    }
};
