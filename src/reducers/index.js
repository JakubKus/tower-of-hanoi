import { combineReducers } from 'redux';
import { selectedColumn } from './selectedColumn';
import { columns } from './columns';

export default combineReducers({
  selectedColumn,
  columns,
});
