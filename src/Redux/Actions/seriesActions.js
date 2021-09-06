import {SeriesActionsTypes} from '../Types/seriesTypes';
import {getFullData, getSearch} from '../../Services/Services';

export const addType = type => ({
  type: SeriesActionsTypes.ADD_TYPE,
  payload: type,
});

export const getData = (type, start, offset) => {
  return async dispatch => {
    dispatch(searchStarted());
    try {
      if (start) {
        const data = await getFullData(type, 0);
        dispatch(searchSuccess(data));
      } else {
        const data = await getFullData(type, offset);
        dispatch(searchSuccess(data, start));
      }
    } catch (error) {
      dispatch(searchFailure(error));
    }
  };
};

const searchSuccess = (data, start) => ({
  type: SeriesActionsTypes.DATA_SUCCESS,
  payload: {
    data,
    start,
  },
});

const searchStarted = () => ({
  type: SeriesActionsTypes.DATA_STARTED,
});

const searchFailure = error => ({
  type: SeriesActionsTypes.DATA_FAILURE,
  payload: {
    error,
  },
});
