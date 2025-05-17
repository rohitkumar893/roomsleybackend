const router = require("express").Router();
const authRoutes = require("./Auth.route");


router.use("/auth", authRoutes);


router.get("/ping", (req, res) => {
  res.json({ success: "true", message: "successful request" });
});

router.post("/listings", listings);

module.exports = router;
