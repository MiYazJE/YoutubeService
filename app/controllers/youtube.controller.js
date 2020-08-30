const youtubeScraper = require('../lib/youtubeScraper');

module.exports = {
    getVideo,
    getVideos
};

async function getVideo(req, res) {
    const { q } = req.params;
    if (!q) {
        return res.status(400).json({ msg: 'Query is empty.' });
    }
    const video = await youtubeScraper.scrapFirstVideo(q);
    res.json(video);
}

async function getVideos(req, res) {
    const { q } = req.params;
    if (!q) {
        return res.status(400).json({ msg: 'Query is empty.' });
    }
    const videos = await youtubeScraper.scrapVideos(q);
    res.json(videos);
}