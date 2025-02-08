// controllers/authController.js
const db = require('../config/db');
const bcrypt = require('bcrypt');

// Registration Controller
exports.register = async (req, res) => {
  try {
    const { fullname, username, email, mobile, password } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.execute(
      `INSERT INTO users (fullname, username, email, mobile, password)
       VALUES (?, ?, ?, ?, ?)`,
      [fullname, username, email, mobile, hashedPassword]
    );

    res.status(201).json({
      message: 'User registered successfully',
      userId: result.insertId 
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Login Controller remains the same
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = rows[0];

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};
