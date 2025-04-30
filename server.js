const mongoose = require("mongoose");
const cors = require('cors');
const express = require("express");
const routes = require('./routes/index');
const { applyTimestamps } = require("./models/User.model");

const app = express();
app.use(express.json());

app.use(cors({
  origin:"http://localhost:5173",
  methods:["GET","POST","PUT","DELETE"]
}));

app.use(routes);


mongoose.connect("mongodb://127.0.0.1:27017/usernew")
  .then(() =>
    console.log("MongoDB Connected!"))
  
  .then(() => {
    const PORT = 3040;
    app.listen(PORT, () => {(
      console.log("Server Started on port")
      );
    });
  })
  .catch((err) => console.log(err));