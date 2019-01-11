import { combineReducers } from 'redux';
import { selectedTower } from './selectedTower';
import { towers } from './towers';

export default combineReducers({
  selectedTower,
  towers,
});
