const express = require("express");
const router = express.Router();
const { getCurrencies,convertCurrencies } = require("../controllers/exchange.controllers.js");
const {exchangeValidator} = require("../middlewares/validate.js"); //validator middleware

router.get("/currencies",getCurrencies);
router.get("/convert",exchangeValidator, convertCurrencies) // path, middleware, controller

module.exports = router;