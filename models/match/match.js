let buildMakeMatch = function(matchValidator) {
  return ({
    creator,
    dateCreation = Date.now(),
    dateMatch,
    timeMatch,
    team1,
    team2,
    winner = "none",
    idMatch
  } = {}) => {
    let { error } = matchValidator({
      creator,
      dateCreation,
      dateMatch,
      timeMatch,
      team1,
      team2,
      winner,
      idMatch
    });
    if (error) throw new Error(error);

    return Object.freeze({
      getCreator: () => creator,
      getDateCreation: () => dateCreation,
      getDateMatch: () => dateMatch,
      getTimeMatch: () => timeMatch,
      getTeam1: () => team1,
      getTeam2: () => team2,
      getWinner: () => winner,
      getIdMatch: () => idMatch
    });
  };
};

module.exports = buildMakeMatch;
