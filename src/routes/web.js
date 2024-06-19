const express = require('express');
const { getHomePage, createUser } = require('../controller/homeController');
const router = express.Router()



router.get('/', getHomePage);
router.post('/add-user', createUser)

module.exports = router;
