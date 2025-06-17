const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const { createListing, getAllListings, deleteListing } = require("../../controller/listings/listings");
const { storage } = require("../../cloudinary");

const upload = multer({ storage });


const signup = require("../../controller/auth/signup");
const login = require("../../controller/auth/login");


router.post("/signup", signup);
router.post("/login", login);
router.post("/listings", upload.single("image"), createListing);
router.post("/getlistings", getAllListings)
router.post("/deletelisting", deleteListing)


module.exports = router;
