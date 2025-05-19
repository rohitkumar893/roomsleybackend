const mongoose = require ('mongoose')

const listingSchema = mongoose.Schema({
    image: String,
    price: String,
    name: String,
    contact: String,
    location: String,
})

module.exports = mongoose.Model('Listings', listingSchema);