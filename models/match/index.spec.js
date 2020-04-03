const chai = require("chai");
const expect = chai.expect;
const makeMatch = require("./index");
const { assert } = require("chai");

describe("makeMatch", () => {
  it("throws error if invalid payload", () => {
    const errorMessage = ["must have creator as string"].join("\n");

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
    const match = makeMatch({
      creator: "consu"
    });
    const input = match.getCreator();
    const actual = "consu";
    expect(input).to.equal(actual);
  });
  it("can have team1", () => {
    const match = makeMatch({ creator: "consu", team1: "red" });
    const input = match.getTeam1();
    const actual = "red";
    expect(input).to.equal(actual);
  });
  it("can have team2", () => {
    const match = makeMatch({ creator: "consu", team2: "blue" });
    const input = match.getTeam2();
    const actual = "blue";
    expect(input).to.equal(actual);
  });
  it("can have winner", () => {
    const match = makeMatch({ creator: "consu", winner: "red" });
    const input = match.getWinner();
    const actual = "red";
    expect(input).to.equal(actual);
  });
  it("sets dateCreation by default ", () => {
    const match = makeMatch({ creator: "consu" });
    const dateCreationeReceived = match.getDateCreation();
    assert.isNotNull(dateCreationeReceived);
  });
  it("sets winner with setWinner method ", () => {
    const match = makeMatch({ creator: "consu" });
    const winnerToSet = "red";
    match.setWinner(winnerToSet);
    const winnerValue = match.getWinner();
    expect(winnerValue).to.equal(winnerToSet);
  });
});
