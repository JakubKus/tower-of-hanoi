export const movesNumber = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_MOVES_COUNTER':
      return action.movesNumber;
    default:
      return state;
  }
};
