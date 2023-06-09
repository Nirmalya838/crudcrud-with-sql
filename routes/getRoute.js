const express = require('express');
const router = express.Router();
const getController = require('../controllers/getController');

router.get('/api/read', getController.getUsers);
router.get('/', getController.getIndexPage);

module.exports = router;
