const express = require("express");
const router = express.Router();

//@route  GET api/profile
//@desc   Test rout
//@access Public
router.get("/", (req, res) => res.send("proflie route"));

module.exports = router;
