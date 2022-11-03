import { mobilityCarAPI } from '../../api/mobilityCar';
import { getCarListAction, getCarWithTypelAction } from './';

export const getCarListThunk = () => {
  return async dispatch => {
    const { getCarList, getCarListSuccess, getCarListFailure } = getCarListAction;
    dispatch(getCarList());
    try {
      const resp = await mobilityCarAPI.getCarList();

      dispatch(getCarListSuccess(resp.payload));
    } catch (error) {
      dispatch(getCarListFailure(error));
    }
  };
};

export const getCarWithTypeThunk = tagInfo => {
  return async dispatch => {
    const { getCarWithType, getCarWithTypeSuccess, getCarWithTypeFailure } = getCarWithTypelAction;
    dispatch(getCarWithType());
    try {
      const resp = await mobilityCarAPI.getCarsWithType(tagInfo);
      dispatch(getCarWithTypeSuccess(resp.payload));
    } catch (error) {
      dispatch(getCarWithTypeFailure(error));
    }
  };
};
