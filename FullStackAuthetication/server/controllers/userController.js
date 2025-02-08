// controllers/userController.js
const db = require('../config/db');

exports.getUsers = async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT id, fullname, username, email, mobile FROM users'
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};
