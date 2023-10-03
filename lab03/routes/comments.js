const express = require("express");
const router = express.Router();
const db = require("../data/db");
router.use(express.json());

module.exports = router;
