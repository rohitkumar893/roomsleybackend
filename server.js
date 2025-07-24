const mongoose = require("mongoose");
const cors = require('cors');
const express = require("express");
const routes = require('./routes/index');
const path = require("path");
const { applyTimestamps } = require("./models/User.model");

const app = express();
app.use(express.json());

app.use(cors({
  origin:"https://roomsley.vercel.app",
  methods:["GET","POST","PUT","DELETE"]
}));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(routes);

app.get("/ping", (req, res) => {
  res.send("ping");
});

mongoose.connect("mongodb+srv://rkrohitkumar893:iiAxqRN3LA94eajn@cluster0.2skwndo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() =>
    console.log("MongoDB Connected!"))
  
  .then(() => {
    const PORT = 3080;
    app.listen(PORT, () => {(
      console.log(`Server started on port ${PORT}`)
      );
    });
  })
  .catch((err) => console.log(err));