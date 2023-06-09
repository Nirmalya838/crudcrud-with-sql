const express = require('express');
const router = express.Router();
const updateController = require('../controllers/updateController');

router.get('/api/read/:id', updateController.getUser);
router.put('/api/update/:id', updateController.updateUser);

module.exports = router;