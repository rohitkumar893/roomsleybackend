const Listing = require('../../models/Listingmodel')

const createListing = async (req, res) => {
  try {

    const { price, name, contact, location } = req.body;


    const imageUrl = req.file.path;

    const newListing = new Listing({
      image: imageUrl,
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
    const { search } = req.body;

    const query = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } }
          ]
        }
      : {};

    const listings = await Listing.find(query);
    res.status(200).json(listings);
  } catch (err) {
    console.error("❌ Error in getAllListings:", err);
    res.status(500).json({ error: "Failed to fetch listings" });
  }
};

const deleteListing =  async(req, res) => {
  try{
    const { _id } = req.body;
    const dlisting = await Listing.deleteOne({ _id })
    res.json(dlisting)
  }

  catch(err){
    console.log(err)
  }
}

module.exports = { createListing, getAllListings, deleteListing };