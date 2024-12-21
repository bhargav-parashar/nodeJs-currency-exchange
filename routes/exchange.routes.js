const express = require("express");
const router = express.Router();
const { getCurrencies,convertCurrencies } = require("../controllers/exchange.controllers.js");

router.get("/currencies",getCurrencies);
router.get("/convert",convertCurrencies)

module.exports = router;