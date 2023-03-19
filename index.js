const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const { port, db } = process.env;
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router/product.router");
mongoose
  .connect(db)
  .then(() => {
    console.log("DB is connected");
  })
  .catch(() => {
    console.log("DB is not connected");
  });
app.use(express.json());
app.use(cors());
app.use("/api", router);
// app.use("/", (req, res) => {
//   res.json({ message: "Hello From Express App" });
// });

app.listen(2023, () => {
  console.log("Server Is Running On", port);
});
