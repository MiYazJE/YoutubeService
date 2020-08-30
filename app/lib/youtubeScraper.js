const puppeteer = require('puppeteer');
const { puppeteerArgs } = require('./options');

let browser, page;
(async () => {
	browser = await puppeteer.launch({ args: puppeteerArgs });
	page = await browser.newPage();
	page.setViewport({ width: 1080, height: 7000 });
})();

module.exports = {
	scrapFirstVideo,
	scrapVideos
};

async function scrapFirstVideo(query) {
	await page.goto(`https://www.youtube.com/results?search_query=${query}`, { waitUntil: 'networkidle0' });
	const song = await page.evaluate(() => {
		const title = document.querySelector('ytd-video-renderer yt-formatted-string').innerText;
		const duration = document.querySelector('ytd-video-renderer ytd-thumbnail-overlay-time-status-renderer span');
		const url = `https://www.youtube.com${document.querySelector('ytd-video-renderer #thumbnail').getAttribute('href')}`;
		const thumbnail = document.querySelector('ytd-video-renderer #img').getAttribute('src');
		return { title, url, thumbnail, duration: duration ? duration.innerText : null };
	});
	return song;
}

async function scrapVideos(query) {
	await page.goto(`https://www.youtube.com/results?search_query=${query}`, { waitUntil: 'networkidle0' });
    const videos = await page.evaluate(() => {
		return [...document.querySelectorAll('ytd-video-renderer')].map((el) => {
			const title = el.querySelector('#video-title').innerText;
			const duration = el.querySelector('ytd-thumbnail-overlay-time-status-renderer span');
            const urlThumbnail = el.querySelector('#img').getAttribute('src');
            const url = el.querySelector('#thumbnail').getAttribute('href');
            return { title, urlThumbnail, url, duration: duration ? duration.innerText : null };
        });
    });
    return videos.filter(v => v.urlThumbnail);
}