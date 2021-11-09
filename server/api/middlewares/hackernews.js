export const validateParams = (req, res, next) => {
  const validStoryParams = [
    'topstories',
    'newstories',
    'beststories',
    'askstories',
    'jobstories',
    'showstories',
  ];

  const storyParam = req.params.story;
  if (!validStoryParams.includes(storyParam)) {
    const error = new Error(
      `[HackerNews API]: Failed request due to unknown param: ${storyParam}`,
    ).message;
    res.status(404).json({ error });
  }
  next();
};
