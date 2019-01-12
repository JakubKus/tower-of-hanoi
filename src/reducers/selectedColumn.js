export const selectedColumn = (state = -1, action) => {
  switch (action.type) {
    case 'SELECT_COLUMN':
      return action.id;
    default:
      return state;
  }
};
