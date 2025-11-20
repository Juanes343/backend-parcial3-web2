const express = require('express');
const router = express.Router();
const { getWikipediaArticles } = require('../controllers/wikipediaController');

router.get('/', getWikipediaArticles);

module.exports = router;