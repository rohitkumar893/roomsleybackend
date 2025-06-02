const mongoose = require ('mongoose')

const listingSchema = new mongoose.Schema({
    image: { type: String, required: true },
    price: { type: String, required: true },
    name: { type: String, required: true },
    contact: { type: String, required: true },
    location: { type: String, required: true },
});

module.exports = mongoose.model('Listings', listingSchema);