import {
  CLOSE_POPUP,
  SELECT_COLUMN,
  INCREMENT_MOVES_COUNTER,
  DID_WRONG_MOVE,
  RESET_GAME,
  SHOW_POPUP_VICTORY,
} from './constants'

export const closePopup = () => ({
  type: CLOSE_POPUP,
});

export const selectColumn = id => ({
  type: SELECT_COLUMN,
  id,
});

export const incrementMovesCounter = (movesNumber) => ({
  type: INCREMENT_MOVES_COUNTER,
  movesNumber: movesNumber + 1,
});

export const didWrongMove = status => ({
  type: DID_WRONG_MOVE,
  status,
});

export const resetGame = () => ({
  type: RESET_GAME,
  columns: [
    [
      { id: 1, class: 'one' },
      { id: 2, class: 'two' },
      { id: 3, class: 'three' },
      { id: 4, class: 'four' },
    ],
    [],
    [],
  ],
});

export const showPopupVictory = () => ({
  type: SHOW_POPUP_VICTORY,
  text: 'Congratulations, you won! :)'
});
