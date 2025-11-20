const express = require('express');
const router = express.Router();
const { getPhotos, getCountries, getUsers } = require('../controllers/resourceController');

router.get('/photos', getPhotos);
router.get('/countries', getCountries);
router.get('/users', getUsers);

module.exports = router;
