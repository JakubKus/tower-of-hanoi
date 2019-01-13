export const wrongMoveStatus = (state = false, action) => {
  switch (action.type) {
    case 'DID_WRONG_MOVE':
      return action.status;
    default:
      return state;
  }
};
