import { asyncState } from '../asyncState';
import { CAR_ACTION_TYPE as TYPE } from './actions';

const initinitalState = {
  carList: asyncState.initial,
  carWithType: asyncState.initial,
};

export default function car(state = initinitalState, action) {
  switch (action.type) {
    case TYPE.GET_CAR_LIST:
      return {
        ...state,
        carList: asyncState.load(),
      };
    case TYPE.GET_CAR_LIST_SUCCESS:
      return {
        ...state,
        carList: asyncState.success(action.payload),
      };
    case TYPE.GET_CAR_LIST_FAILURE:
      return {
        ...state,
        carList: asyncState.load(action.error),
      };

    case TYPE.GET_CAR_WITH_TYPE:
      return {
        ...state,
        carWithType: asyncState.load(),
      };
    case TYPE.GET_CAR_WITH_TYPE_SUCCESS:
      return {
        ...state,
        carWithType: asyncState.success(action.payload),
      };
    case TYPE.GET_CAR_WITH_TYPE_FAILURE:
      return {
        ...state,
        carWithType: asyncState.load(action.error),
      };

    default:
      return state;
  }
}
