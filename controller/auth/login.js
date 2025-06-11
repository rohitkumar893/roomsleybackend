const User = require('../../models/User.model.js')
const jwt = require('jsonwebtoken')

const login= async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = {
        username:username,
        password:password
      }

      const existingUser = await User.findOne({ username });
      if (existingUser && existingUser.password === password) {
        return res.json({
        message: "Login successful"
      });
      } else {
        return res.status(400).json({ message: "Invalid username or password" });
      }

    } catch (error) {
      console.error("Server Error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  module.exports = login;