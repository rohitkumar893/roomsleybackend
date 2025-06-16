const mongoose = require("mongoose");
const cors = require('cors');
const express = require("express");
const routes = require('./routes/index');
const { applyTimestamps } = require("./models/User.model");

const app = express();
app.use(express.json());

app.use(cors({
  origin:"https://roomsley.vercel.app",
  methods:["GET","POST","PUT","DELETE"]
}));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(routes);

mongoose.connect("mongodb+srv://rkrohitkumar893:iiAxqRN3LA94eajn@cluster0.2skwndo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
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