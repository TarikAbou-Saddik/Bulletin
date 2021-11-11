import express from 'express';
import cors from 'cors';
import config from './config/index.js';
import { getScreenshotBufferFromUrl } from './services/pupeteerservice.js';
import HackerNewsRoutes from './api/hackernews.js';

const app = express();
const PORT = config.port || 5000;

// Routes
app.use('/api/hackernews', HackerNewsRoutes);

app.get('/screenshot', async (req, res) => {
  try {
    const screenshotBuffer = await getScreenshotBufferFromUrl(req.query.url);
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': screenshotBuffer.length,
    });
    res.end(screenshotBuffer);
  } catch (error) {
    console.error(error);
  }
});

// Enable CORS
app.use(cors);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
