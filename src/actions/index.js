export const selectColumn = id => ({
  type: 'SELECT_COLUMN',
  id,
});

export const didWrongMove = status => ({
  type: 'DID_WRONG_MOVE',
  status,
});
