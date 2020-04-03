const chai = require("chai");
const expect = chai.expect;
const validator = require("./index");
const matchSchema = require("../match/match-schema");
const matchValidator = validator(matchSchema);

describe("validators", () => {
  describe("matchValidator", () => {
    it("validates the match property (creatore, dates ecc)", () => {
      const validPayload = {
        creator: "consu",
        dateCreation: Date.now(),
        dateMatch: Date.now(),
        timeMatch: "12:00",
        team1: "red",
        team2: "blue",
        winner: "red",
        idMatch: "stringa1123casuale22"
      };
      const input = matchValidator(validPayload);
      const actual = true;
      expect(input).to.equal(actual);
    });

    it("returns error messages if invalid", () => {
      const invalidPayload = {
        creator: "consu",
        secret: "boom"
      };
      const input = matchValidator(invalidPayload);
      const errorMessage = ['"secret" is not allowed'].join("\n");

      const actual = {
        error: errorMessage
      };

      expect(input).to.eql(actual);
    });
  });
});
