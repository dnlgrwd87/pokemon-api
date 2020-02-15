const { pool } = require('../db');

module.exports.getAllPokemon = () => {
    const query = 'SELECT * FROM pokemon';
    return pool.query(query);
};

module.exports.getPokemonById = id => {
    const query = { text: 'SELECT * FROM pokemon WHERE id = $1', values: [id] };
    return pool.query(query);
};

module.exports.addPokemon = ({ name, pokedex_id, image_url }) => {
    const query = {
        text: 'INSERT INTO pokemon(name, pokedex_id, image_url) VALUES($1, $2, $3) RETURNING *',
        values: [name, pokedex_id, image_url]
    };
    return pool.query(query);
};

module.exports.deletePokemon = id => {
    const query = {
        text: 'DELETE FROM pokemon WHERE id = $1',
        values: [id]
    };
    return pool.query(query);
};

module.exports.getAllPokemonByTrainerId = id => {
    const query = {
        text: 'SELECT * FROM pokemon WHERE trainer_id = $1',
        values: [id]
    };
    return pool.query(query);
};
