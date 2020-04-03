import makeAddMatch from "./add-match";
import makeEditMatch from "./edit-match";
import makeRemoveMatch from "./remove-match";
import makeGetMatch from "./list-match";
import matchDb from "../data-access";

const addMatch = makeAddMatch({ matchDb });
const editMatch = makeEditMatch({ matchDb });
const getMatch = makeGetMatch({ matchDb });
const removeMatch = makeRemoveMatch({ matchDb });

const matchService = Object.freeze({
  addMatch,
  editMatch,
  getMatch,
  removeMatch
});

export default matchService;
export { addMatch, editMatch, getMatch, removeMatch };
