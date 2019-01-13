import { combineReducers } from 'redux';
import { columns } from './columns';
import { selectedColumn } from './selectedColumn';
import { movesNumber } from './movesNumber';
import { wrongMoveStatus } from './wrongMoveStatus';

export default combineReducers({
  columns,
  selectedColumn,
  movesNumber,
  wrongMoveStatus,
});
