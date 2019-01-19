import { DID_WRONG_MOVE, RESET_GAME } from "../actions/constants";

export const wrongMoveStatus = (state = false, action) => {
  switch (action.type) {
    case DID_WRONG_MOVE:
      return action.status;
    case RESET_GAME:
      return false;
    default:
      return state;
  }
};
