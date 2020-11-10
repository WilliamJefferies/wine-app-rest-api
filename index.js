import express from 'express';
import helmet from 'helmet';
import * as middleware from './src/middleware';
import * as handlers from "./src/handlers";

const app = express();
const PORT = 3000;

// first layer security
app.use(helmet)

// middleware for identifying the sorting strategy
app.use('/api/breakdown/', middleware.setBreakdownStrategy);

// middleware for identifying the lotcode
app.use('/api/breakdown/', middleware.setLotCode);

app.get('/api/breakdown/*', (req, res) => handlers.getBreakdownHandler(req, res));

// should be one path in the future
app.get('/api/lotcodes', (req, res) => handlers.getLotCodesHandler(req, res));
app.get('/api/breakdown-strategies', (req, res) => handlers.getBreakdownStrategiesHandler(req, res));


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});