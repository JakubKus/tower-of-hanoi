import { combineReducers } from 'redux';
import { popup } from './popup';
import { columns } from './columns';
import { selectedColumn } from './selectedColumn';
import { movesNumber } from './movesNumber';
import { wrongMoveStatus } from './wrongMoveStatus';

export default combineReducers({
  popup,
  columns,
  selectedColumn,
  movesNumber,
  wrongMoveStatus,
});
