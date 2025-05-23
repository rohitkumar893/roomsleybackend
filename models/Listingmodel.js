const mongoose = require ('mongoose')

const listingSchema = new mongoose.Schema({
    image: String,
    price: String,
    name: String,
    contact: String,
    location: String,
})

module.exports = mongoose.model('Listings', listingSchema);