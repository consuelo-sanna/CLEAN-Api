const Joi = require("joi");

module.exports = Joi.object().keys({
  creator: Joi.string()
    .required()
    .error(() => "must have creator as string"),
  dateCreation: Joi.date().error(() => "dateCreation must be a date"),
  dateMatch: Joi.date().error(() => "dateMatch must be a date"),
  timeMatch: Joi.string()
    .regex(/^([0-9]{2})\:([0-9]{2})$/)
    .error(() => "time must be HH:MM"),
  team1: Joi.string().error(() => "team1 must be a string/team ref"),
  team2: Joi.string().error(() => "team2 must be a string/team ref"),
  winner: Joi.string().error(() => "winner must be a string/team ref"),
  idMatch: Joi.string().error(() => "idMatch must be an id/id ref")
});
