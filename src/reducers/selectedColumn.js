export const selectedColumn = (state = -1, action) => {
  switch (action.type) {
    case 'SELECT_COLUMN':
      return action.id;
    case 'RESET_GAME':
      return -1;
    default:
      return state;
  }
};
