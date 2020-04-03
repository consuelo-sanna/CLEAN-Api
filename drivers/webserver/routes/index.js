const express = require("express");
const router = express.Router();

const match = require("./match");

router
  .get("/match", match.index)
  .get("/match/:id", match.show)
  .post("/match", match.create);

module.exports = router;
