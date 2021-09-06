import {SeriesActionsTypes} from '../Types/seriesTypes';
import {getFullData, getSearch} from '../../Services/Services';

export const addType = type => ({
  type: SeriesActionsTypes.ADD_TYPE,
  payload: type,
});

export const getData = (type, start, offset, more = false) => {
  return async dispatch => {
    dispatch(searchStarted(start, more));
    try {
      if (start) {
        const data = await getFullData(type, 0);
        dispatch(searchSuccess(data, start));
      } else {
        const data = await getFullData(type, offset);
        dispatch(searchSuccess(data, start, more));
      }
    } catch (error) {
      dispatch(searchFailure(error));
    }
  };
};

const searchSuccess = (data, start, more) => ({
  type: SeriesActionsTypes.DATA_SUCCESS,
  payload: {
    data,
    start,
    more,
  },
});

const searchStarted = (start, more) => ({
  type: SeriesActionsTypes.DATA_STARTED,
  payload: {start, more},
});

const searchFailure = error => ({
  type: SeriesActionsTypes.DATA_FAILURE,
  payload: {
    error,
  },
});
