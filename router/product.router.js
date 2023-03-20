const express = require("express");
const {
  postdata,
  viewdata,
  updatedata,
  deletedata,
  healthcheck,
} = require("../controller/product.controller");
const router = express.Router();
router.post("/create", postdata);
router.get("/view", viewdata);
router.put("/update/:id", updatedata);
router.delete("/delete/:id", deletedata);
router.get("/healthcheck", healthcheck);
module.exports = router;
