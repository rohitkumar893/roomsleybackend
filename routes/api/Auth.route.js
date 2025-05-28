const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const { createListing, getAllListings } = require("../../controller/listings/listings");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store in uploads folder
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

const signup = require("../../controller/auth/signup");
const login = require("../../controller/auth/login");
const { createListing, getAllListings } = require("../../controller/listings/listings")


router.post("/signup", signup);
router.post("/login", login);
router.post("/listings", upload.single("image"), createListing);
router.post("/getlistings", getAllListings)


module.exports = router;
