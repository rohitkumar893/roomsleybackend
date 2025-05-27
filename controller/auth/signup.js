const User = require('../../models/User.model.js')
const{ registrationValidation }=require("../../services/validation_schema")


const register= async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: "Username already taken" });
      }
  
      const newUser = new User({ username, password });
      await newUser.save();
  
      res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
      console.error("Server Error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  module.exports = register; 