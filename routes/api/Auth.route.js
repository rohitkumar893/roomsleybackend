const router = require("express").Router();

const signup = require("../../controller/auth/signup");
const login = require("../../controller/auth/login");


router.post("/signup", signup);
router.post("/login", login);


module.exports = router;
