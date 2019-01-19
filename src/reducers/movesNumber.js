import { INCREMENT_MOVES_COUNTER, RESET_GAME } from "../actions/constants";

export const movesNumber = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_MOVES_COUNTER:
      return action.movesNumber;
    case RESET_GAME:
      return 0;
    default:
      return state;
  }
};
