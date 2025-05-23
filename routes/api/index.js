const router = require("express").Router();
const authRoutes = require("./Auth.route");
// const listingsRoutes = require("./listings");
// router.use("/", listingsRoutes);

router.use("/auth", authRoutes);
// router.use("/", listingsRoutes);

router.get("/ping", (req, res) => {
  res.json({ success: "true", message: "successful request" });
});

module.exports = router;
