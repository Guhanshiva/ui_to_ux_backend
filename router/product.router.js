const express = require("express");
const { postdata, viewdata } = require("../controller/product.controller");
const router = express.Router();
router.post("/create", postdata);
router.get("/view", viewdata);
module.exports = router;
