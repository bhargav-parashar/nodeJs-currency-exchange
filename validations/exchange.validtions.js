const Joi = require("joi"); //convention to write J capital for Joi constant

const convertSchema = Joi.object({
    value: Joi.number().positive().required(),
    currency: Joi.string().length(3).required(),
    to_currency:Joi.string().length(3).required()
});

module.exports = {convertSchema};