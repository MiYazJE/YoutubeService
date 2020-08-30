const youtubeScraper = require('../lib/youtubeScraper');

module.exports = {
    getSong,
    getVideos
};

async function getSong(req, res) {
    const { q } = req.params;
    if (!q) {
        return res.status(400).json({ msg: 'Query is empty.' });
    }
    const song = await youtubeScraper.scrapSong(q);
    res.json(song);
}

async function getVideos(req, res) {
    const { q } = req.params;
    if (!q) {
        return res.status(400).json({ msg: 'Query is empty.' });
    }
    const videos = await youtubeScraper.scrapVideos(q);
    res.json(videos);
}