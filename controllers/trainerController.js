const { getTrainerById } = require('../services/trainerService');

module.exports.getTrainerById = async (req, res) => {
    try {
        const response = await getTrainerById(req.params.id);
        res.status(200).json(response.rows[0]);
    } catch (error) {
        res.json(error);
    }
};
