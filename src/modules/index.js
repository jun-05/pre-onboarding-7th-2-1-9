import { combineReducers } from 'redux';
import car from './car';
import tag from './tag';

const rootReducer = combineReducers({
  car,
  tag,
});

export default rootReducer;
