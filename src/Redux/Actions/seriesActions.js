import {SeriesActionsTypes} from '../Types/seriesTypes';

export const addType = type => ({
  type: SeriesActionsTypes.ADD_TYPE,
  payload: type,
});
