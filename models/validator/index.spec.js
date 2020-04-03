let chai = require("chai");
let expect = chai.expect;
let validator = require("./index");
let matchSchema = require("../match/match-schema");
let matchValidator = validator(matchSchema);

describe("validators", () => {
  describe("matchValidator", () => {
    it("validates the match property (creatore, dates ecc)", () => {
      let validPayload = {
        creator: "consu",
        dateCreation: Date.now(),
        dateMatch: Date.now(),
        timeMatch: "12:00",
        team1: "red",
        team2: "blue",
        winner: "red",
        idMatch: "stringa1123casuale22"
      };
      let input = matchValidator(validPayload);
      let actual = true;
      expect(input).to.equal(actual);
    });

    it("returns error messages if invalid", () => {
      let invalidPayload = {
        creator: "consu",
        secret: "boom"
      };
      let input = matchValidator(invalidPayload);
      let errorMessage = ['"secret" is not allowed'].join("\n");

      let actual = {
        error: errorMessage
      };

      expect(input).to.eql(actual);
    });
  });
});
