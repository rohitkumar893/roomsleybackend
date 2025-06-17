const router = require("express").Router();

const createError = require("http-errors");

const apiRoutes = require("./api/index.js");

router.use("/api", apiRoutes);

router.get("/api/ping", (req, res) => {
  res.json({ success: true, message: "Backend alive!" });
});

router.use("/api", (req, res, next) => {
  next(
    createError.NotFound("The route you are trying to access does not exist.")
  );
});




router.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    },
  });
});

module.exports = router;
