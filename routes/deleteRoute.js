const express = require('express');
const router = express.Router();
const deleteController = require('../controllers/deleteController');

router.delete('/api/delete/:id', deleteController.deleteUser);

module.exports = router;
