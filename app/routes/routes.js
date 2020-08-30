const router = require('express').Router();
const ytbeCtrl = require('../controllers/youtube.controller');

router.get('/getVideo/:q', ytbeCtrl.getVideo);
router.get('/getVideos/:q', ytbeCtrl.getVideos);

module.exports = router;