export const CAR_ACTION_TYPE = {
  GET_CAR_LIST: 'car/GET_CAR_LIST',
  GET_CAR_LIST_SUCCESS: 'car/GET_CAR_LIST_SUCCESS',
  GET_CAR_LIST_FAILURE: 'car/GET_CAR_LIST_FAILURE',

  GET_CAR_WITH_TYPE: 'car/GET_CAR_WITH_TYPE',
  GET_CAR_WITH_TYPE_SUCCESS: 'car/GET_CAR_WITH_TYPE_SUCCESS',
  GET_CAR_WITH_TYPE_FAILURE: 'car/GET_CAR_WITH_TYPE_FAILURE',
};

export const getCarListAction = {
  getCarList: () => ({
    type: CAR_ACTION_TYPE.GET_CAR_LIST,
  }),
  getCarListSuccess: payload => ({
    type: CAR_ACTION_TYPE.GET_CAR_LIST_SUCCESS,
    payload: payload,
  }),
  getCarListFailure: error => ({
    type: CAR_ACTION_TYPE.GET_CAR_LIST_SUCCESS,
    error: error,
  }),
};

export const getCarWithTypelAction = {
  getCarWithType: () => ({
    type: CAR_ACTION_TYPE.GET_CAR_WITH_TYPE,
  }),
  getCarWithTypeSuccess: payload => ({
    type: CAR_ACTION_TYPE.GET_CAR_WITH_TYPE_SUCCESS,
    payload: payload,
  }),
  getCarWithTypeFailure: error => ({
    type: CAR_ACTION_TYPE.GET_CAR_WITH_TYPE_FAILURE,
    error: error,
  }),
};
