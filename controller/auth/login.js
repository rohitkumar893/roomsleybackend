const User = require('../../models/User.model.js')
const jwt = require('jsonwebtoken')
// const{ loginValidation }=require("../../services/validation_schema_login")

const JWT_USER_PASSWORD = "rohitrohit"

const login= async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = {
        username:username,
        password:password
      }

      console.log(jwt)

      if (user){
        const token = jwt.sign(
            {
                user
            },
            JWT_USER_PASSWORD
        );
        console.log(token);
      }

      res.json({ 
        message: "Login successful",
        token
    });

    const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: "Login successful" });
      }

    } catch (error) {
      console.error("Server Error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  module.exports = login;