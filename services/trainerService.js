const { pool } = require('../db');

module.exports.getTrainerById = id => {
    const query = {
        text: 'SELECT * FROM trainer WHERE id = $1',
        values: [id]
    };
    return pool.query(query);
};
