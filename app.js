const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const pokemonRoutes = require('./routes/pokemonRoutes');
const trainerRoutes = require('./routes/trainerRoutes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Setup Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-ui/swagger.json');

// Set routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/pokemon', pokemonRoutes);
app.use('/trainers', trainerRoutes);

// Handle errors
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: { message: error.message } });
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));
