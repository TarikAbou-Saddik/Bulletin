import dotenv from 'dotenv';

const result = dotenv.config({
  silent: true,
});

if (result.error) {
  throw new Error('[dotenv Error]: Could not find .env file.');
}

export default {
  port: process.env.PORT,
  hackernews: {
    apiUrl: process.env.HACKERNEWS_API_BASE_URL,
  },
};
