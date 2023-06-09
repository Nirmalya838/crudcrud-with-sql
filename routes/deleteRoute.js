const express = require('express');
const path = require('path');
const connection = require('../database/db');
const router = express.Router();

router.delete('/api/delete/:id', (req, res) => {
  const userId = req.params.id;
  const query = 'DELETE FROM users WHERE id = ?';
  connection.query(query, [userId], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    const deleteFilePath = path.join(__dirname, '..', 'views', 'delete.html');
    res.sendFile(deleteFilePath);
  });
});

module.exports = router;
