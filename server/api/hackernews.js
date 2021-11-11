import express from 'express';
import HackerNewsService from '../services/api/hackernewsservice.js';
import { validateParams } from './middlewares/hackernews.js';

const router = express.Router();
const _hackerNewsService = new HackerNewsService();

// TODO: Add count as query param.
router.get('/', async (req, res) => {
  try {
    res.status(200).json(await _hackerNewsService.getStories());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// TODO: Add count as query param.
router.get('/:story', validateParams, async (req, res) => {
  try {
    res.status(200).json(await _hackerNewsService.getStories(req.params.story));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
