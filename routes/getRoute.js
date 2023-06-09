const express = require('express');
const path = require('path');
const connection = require('../database/db');
const router = express.Router();

router.get('/api/read', (req, res) => {
    const query = 'SELECT * FROM users';
    connection.query(query, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.json(results);
    });
  });

  module.exports=router;