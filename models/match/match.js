const buildMakeMatch = function(matchValidator) {
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
    const { error } = matchValidator({
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

    /** only allow this property to be red,
     * preventing my object from changing to an invalid state
     * if that happened, should happened during the creation
     * */
    return Object.freeze({
      getCreator: () => creator,
      getDateCreation: () => dateCreation,
      getDateMatch: () => dateMatch,
      getTimeMatch: () => timeMatch,
      getTeam1: () => team1,
      getTeam2: () => team2,
      getWinner: () => winner,
      getIdMatch: () => idMatch,
      setWinner: value => {
        winner = value;
      }
    });
  };
};

module.exports = buildMakeMatch;
