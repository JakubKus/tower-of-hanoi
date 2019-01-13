import { combineReducers } from 'redux';
import { columns } from './columns';
import { selectedColumn } from './selectedColumn';
import { wrongMoveStatus } from './wrongMoveStatus';

export default combineReducers({
  columns,
  selectedColumn,
  wrongMoveStatus,
});
