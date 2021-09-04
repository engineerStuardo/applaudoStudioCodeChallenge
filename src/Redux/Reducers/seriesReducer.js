import {SeriesActionsTypes} from '../Types/seriesTypes';

const initialState = {
  loading: false,
  loadingFooter: false,
  loadingSearch: false,
  type: '',
  anime: [],
  manga: [],
  offset: 0,
  searchText: '',
};

export const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SeriesActionsTypes.ADD_TYPE:
      return {
        ...state,
        type: action.payload,
      };

    default:
      return state;
  }
};
