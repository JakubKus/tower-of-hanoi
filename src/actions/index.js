export const selectColumn = id => ({
  type: 'SELECT_COLUMN',
  id,
});

export const didWrongMove = status => ({
  type: 'DID_WRONG_MOVE',
  status,
});

export const incrementMovesCounter = (movesNumber) => ({
  type: 'INCREMENT_MOVES_COUNTER',
  movesNumber: movesNumber + 1,
});
