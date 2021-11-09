import express from 'express';
import cors from 'cors';
import config from './config/index.js';
import HackerNewsRoutes from './api/hackernews.js';

const app = express();
const PORT = config.port || 5000;

// Routes
app.use('/api/hackernews', HackerNewsRoutes);
// Enable CORS
app.use(cors);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
