const path = require('path');
const connection = require('../database/db');

function deleteUser(req, res) {
  const userId = req.params.id;
  const query = 'DELETE FROM users WHERE id = ?';
  connection.query(query, [userId], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.sendFile(path.join(__dirname, '../views', 'delete.html'));
  });
}

module.exports = {
  deleteUser,
};
