export const selectedTower = (state = -1, action) => {
  switch (action.type) {
    case 'SELECT_TOWER':
      return action.id;
    default:
      return state;
  }
};
