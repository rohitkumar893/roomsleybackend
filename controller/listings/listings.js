const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors());

app.get('/listings', (req,res) => {
    const data = req.body;
    console.log(data);
    res.json({message:'got it', data})
});

module.exports = listings;