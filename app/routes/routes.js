const router = require('express').Router();
const ytbeCtrl = require('../controllers/youtube.controller');

router.get('/getSong/:q', ytbeCtrl.getSong);
router.get('/getVideos/:q', ytbeCtrl.getVideos);

module.exports = router;