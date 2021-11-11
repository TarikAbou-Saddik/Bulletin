import puppeteer from 'puppeteer';

export const getScreenshotBufferFromUrl = async url => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  const screenshotBuffer = await page.screenshot();
  await browser.close();

  return screenshotBuffer;
};
