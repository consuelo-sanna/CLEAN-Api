import makeMatch from "../models/match";
export default function makeAddMatch({ matchDb }) {
  return async function addMatch(matchInfo) {
    const match = makeMatch(matchInfo);
    const exists = await matchDb.findById({ idMatch: match.getIdMatch() });
    if (exists) {
      return exists;
    }

    return matchDb.insert({
      creator: match.getCreator(),
      dateCreation: match.getDateCreation(),
      dateMatch: match.getDateMatch(),
      timeMatch: match.getTimeMatch(),
      team1: match.getTeam1(),
      team2: match.getTeam2(),
      winner: match.getWinner(),
      idMatch: match.getIdMatch()
    });
  };
}
