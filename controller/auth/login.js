const User = require('../../models/User.model.js')
const jwt = require('jsonwebtoken')
// const{ loginValidation }=require("../../services/validation_schema_login")

// const JWT_USER_PASSWORD = "rohitrohit"

const login= async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = {
        username:username,
        password:password
      }

    //   let token;

    //   const existingUser = await User.findOne({ username });
    //   if (existingUser && existingUser.password === password) {
    //      token = jwt.sign(
    //         {
    //             _id: existingUser._id
    //         },
    //         JWT_USER_PASSWORD
    //     );
    //     console.log(token);
    //   } else {
    //     return res.status(400).json({ message: "Invalid username or password" });
    //   }

    //   res.json({ 
    //     message: "Login successful",
    //     token
    // });

    if (existingUser) {
      return res.status(400).json({ message: "Login successful" });
    }

    } catch (error) {
      console.error("Server Error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  module.exports = login;