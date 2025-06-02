const Listing = require('../../models/Listingmodel')

const createListing = async (req, res) => {
  try {

    const { price, name, contact, location } = req.body;


    const imagePath = req.file ? req.file.filename : "";

    const newListing = new Listing({
      image: imagePath,
      price,
      name,
      contact,
      location,
    });


    const savedListing = await newListing.save();
    res.status(201).json(savedListing);
  } catch (err) {
    console.error("❌ Error in createListing:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (err) {
    console.error("❌ Error in getAllListings:", err);
    res.status(500).json({ error: "Failed to fetch listings" });
  }
};

const deleteListing =  async(req, res) => {
  try{
    const dlisting = await Listing.deleteOne(req.body)
  }

  catch(err){
    console.log(err)
  }
}

module.exports = { createListing, getAllListings, deleteListing };