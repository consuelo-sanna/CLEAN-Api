let buildMakeMatch = require("./match");
let matchSchema = require("./match-schema");
// let {matchValidator} = require('../../validator')
let matchValidator = require("../validator/")(matchSchema);

let makeMatch = buildMakeMatch(matchValidator);

module.exports = makeMatch;
