const {convertSchema} = require("../validations/exchange.validtions.js");

const exchangeValidator = (req, res, next) =>{

    const{value, currency, to_currency} = req.query;
    const {error} = convertSchema.validate({value,currency,to_currency});

    if(error) return  res.status(400).send({message : "Incomplete or Incorrect data passed"});
    next();
}
module.exports = {exchangeValidator};