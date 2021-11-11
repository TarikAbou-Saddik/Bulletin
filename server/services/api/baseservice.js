import fetch from 'node-fetch';

export default class BaseService {
  constructor(serviceName, apiUrl) {
    this.serviceName = serviceName;
    this.apiUrl = apiUrl;
    this.fetch = fetch;
  }

  /**
   * Helper method that takes an async call back and wraps it in a try-catch.
   * @param {Request} request
   * @returns Promise<void>
   */
  async createRequest(request) {
    try {
      const response = await this.fetch(request);
      if (!response.ok) {
        throw new Error(`${response.statusText}`);
      }
      return response;
    } catch (error) {
      throw new Error(`[${this.serviceName}]: ${error.message}`);
    }
  }
}
