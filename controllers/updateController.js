const path = require('path');
const connection = require('../database/db');

function getUser (req, res) {
    const userId =req.params.id;
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    connection.query(query, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
        return;
      }
      const user = results[0];
      res.json(user);
    });
  }
  
  function updateUser (req, res) {
    const userId = req.params.id;
    const { name, email } = req.body;
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    connection.query(query, [name, email, userId], (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.sendFile(path.join(__dirname, '../views', 'update.html'));
    });
  };

  module.exports = {
    getUser,
    updateUser,
  }