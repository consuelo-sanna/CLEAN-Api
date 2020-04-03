let Joi = require("joi");

let validator = schema => payload => {
  let { error } = Joi.validate(payload, schema, { abortEarly: false });
  if (error) {
    let message = error.details.map(el => el.message).join("\n");
    console.log("errore test:", message);
    return {
      error: message
    };
  }
  return true;
};

module.exports = validator;
