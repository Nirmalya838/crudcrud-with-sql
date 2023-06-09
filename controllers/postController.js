const path = require('path');
const connection = require('../database/db');

function createUser(req, res) {
  const { name, email } = req.body;
  const query = 'INSERT INTO users (name, email, createdAt, updatedAt) VALUES (?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)';
  connection.query(query, [name, email], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.sendFile(path.join(__dirname, '../views', 'success.html'));
  });
}

module.exports = {
  createUser,
};
