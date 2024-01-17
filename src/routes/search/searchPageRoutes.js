const express = require('express');
const router = express.Router();

const auth = require('../../middlewares/auth');
const searchControllers = require('../../controllers/searchControllers');

router.get('/search/:searchText', auth, searchControllers.renderSeacrhPage);

router.post('/search', auth, searchControllers.redirectToSearch);


module.exports = router;

