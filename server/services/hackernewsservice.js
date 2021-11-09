import BaseService from './baseservice.js';
import config from '../config/index.js';

export default class HackerNewsService extends BaseService {
  constructor() {
    super('HackerNewsService', config.hackernews.apiUrl);
    this.itemType = {
      JOB: 'job',
      STORY: 'story',
      COMMENT: 'comment',
      POLL: 'poll',
      POLLOPT: 'pollopt',
    };
  }

  // Stories
  async getStories(count = 5, path = 'topstories') {
    const response = await this.createRequest(`${this.apiUrl}/${path}.json`);
    const ids = await response.json();
    const stories = await this.getResourcesByIds('item', ids.slice(0, count));
    return this.parseStoryResponse(stories);
  }

  // Users
  async getUsers(userIds) {
    return await this.getResourcesByIds('user', userIds);
  }

  async getUser(userId) {
    return await this.getResourceById('user', userId);
  }

  /**
   * Helps to walk backward and discover other Items.
   * @returns The current largest Item ID.
   */
  async getLatestItem() {
    const response = await this.createRequest(`${this.apiUrl}/maxitem.json`);
    const id = response.json();
    return await this.getResourceById('item', id);
  }

  // Helper methods
  async getResourcesByIds(descriptor, resourceIds) {
    const result = await Promise.all(
      resourceIds.map(async id => {
        const resp = await this.getResourceById(descriptor, id);
        return resp;
      }),
    );
    return result;
  }

  async getResourceById(descriptor, resourceId) {
    const response = await this.createRequest(
      `${this.apiUrl}/${descriptor}/${resourceId}.json`,
    );
    return await response.json();
  }

  parseStoryResponse(stories) {
    console.log(stories);
    const posts = stories.map(story => {
      return {
        points: story.score,
        rawPostedDate: new Date(story.time * 1000),
        formattedPostedDate: this.formatDateForPost(
          new Date(story.time * 1000),
        ),
        title: story.title,
        link: story.url,
        author: story.by,
        postType: story.type,
      };
    });
    return {
      logo: {
        iconSrc: 'FaHackerNews',
        title: 'Hacker News',
        color: '#FF6600',
      },
      description:
        'A never ending source for interesting articles and promising career opportunities.',
      posts,
    };
  }

  formatDateForPost(date) {
    const offSet = new Date().getTime() - new Date(date).getTime();
    const minsElapsed = offSet / (60 * 1000);
    const hoursElapsed = minsElapsed / 60;
    if (minsElapsed < 60) {
      return 'Less than an hour ago';
    } else if (minsElapsed >= 60 && minsElapsed < 120) {
      return 'Over an hour ago';
    } else if (hoursElapsed < 24) {
      return `More than ${hoursElapsed.toFixed(0)} hours ago.`;
    } else {
      return `${hoursElapsed.toFixed(0)} day(s) ago.`;
    }
  }
}
