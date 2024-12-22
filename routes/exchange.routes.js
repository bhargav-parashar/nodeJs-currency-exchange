const express = require("express");
const router = express.Router();
const { getCurrencies,convertCurrencies } = require("../controllers/exchange.controllers.js");
const {convertSchema} = require("../validations/exchange.validtions.js");

//const {exchangeValidator} = require("../middlewares/validate.js"); validator middleware

const {queryValidator} = require("../middlewares/validate.js"); // importing general query validator function which returns a middleware
const exchangeValidator = queryValidator(convertSchema) // Calling the general function which will return a middleware instance

router.get("/currencies",getCurrencies);

//router.get("/convert",exchangeValidator, convertCurrencies) path, middleware, controller

router.get("/convert",exchangeValidator,convertCurrencies); //path, middleware, controller

module.exports = router;