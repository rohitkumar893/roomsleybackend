const router = require("express").Router();

const signup = require("../../controller/auth/signup");
const login = require("../../controller/auth/login");
const { createListing, getAllListings } = require("../../controller/listings/listings")


router.post("/signup", signup);
router.post("/login", login);
router.post("/listings", listings);


module.exports = router;
