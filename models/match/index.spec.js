let chai = require("chai");
let expect = chai.expect;
let makeMatch = require("./index");
const { assert } = require("chai");

describe("makeMatch", () => {
  it("throws error if invalid payload", () => {
    let errorMessage = ["must have creator as string"].join("\n");

    expect(() => {
      makeMatch({
        dateCreation: Date.now(),
        dateMatch: Date.now(),
        timeMatch: "12:00",
        team1: "red",
        team2: "blue",
        winner: "red",
        idMatch: "stringa1123casuale22"
      });
    }).to.throw(errorMessage);
  });

  it("must have creator", () => {
    let match = makeMatch({
      creator: "consu"
    });
    let input = match.getCreator();
    let actual = "consu";
    expect(input).to.equal(actual);
  });
  it("can have team1", () => {
    let match = makeMatch({ creator: "consu", team1: "red" });
    let input = match.getTeam1();
    let actual = "red";
    expect(input).to.equal(actual);
  });
  it("can have team2", () => {
    let match = makeMatch({ creator: "consu", team2: "blue" });
    let input = match.getTeam2();
    let actual = "blue";
    expect(input).to.equal(actual);
  });
  it("can have winner", () => {
    let match = makeMatch({ creator: "consu", winner: "red" });
    let input = match.getWinner();
    let actual = "red";
    expect(input).to.equal(actual);
  });
  it("sets dateCreation by default ", () => {
    let match = makeMatch({ creator: "consu" });
    let dateCreationeReceived = match.getDateCreation();
    assert.isNotNull(dateCreationeReceived);
  });
});
