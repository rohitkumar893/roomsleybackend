const express = require('../../models/Listingmodel')

const createListing = async (req, res) => {
  try {
     console.log("📥 Data received from frontend:", req.body);
     
    const data = req.body;
    const newListing = new Listing(data);
    const savedListing = await newListing.save();
    res.status(201).json(savedListing);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch listings" });
  }
};

module.exports = { createListing, getAllListings };