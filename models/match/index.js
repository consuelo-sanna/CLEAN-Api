const buildMakeMatch = require("./match");
const matchSchema = require("./match-schema");
// let {matchValidator} = require('../../validator')
const matchValidator = require("../validator/")(matchSchema);

const makeMatch = buildMakeMatch(matchValidator);

module.exports = makeMatch;
