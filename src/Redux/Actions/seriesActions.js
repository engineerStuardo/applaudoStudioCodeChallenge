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
        dispatch(searchSuccess(data));
      }
    } catch (error) {
      dispatch(searchFailure(error));
    }
  };
};

const searchSuccess = data => ({
  type: SeriesActionsTypes.SEARCH_SUCCESS,
  payload: {
    ...data,
  },
});

const searchStarted = () => ({
  type: SeriesActionsTypes.SEARCH_STARTED,
});

const searchFailure = error => ({
  type: SeriesActionsTypes.SEARCH_FAILURE,
  payload: {
    error,
  },
});
