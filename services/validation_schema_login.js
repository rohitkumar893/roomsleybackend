const Joi = require("joi");

const loginValidation = Joi.object({
    username:Joi.string().required(),
    password: Joi.string().required(),
});

module.exports = { loginValidation };