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
  error: '',
};

export const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SeriesActionsTypes.ADD_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case SeriesActionsTypes.SEARCH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case SeriesActionsTypes.SEARCH_SUCCESS:
      let animes = [];
      let mangas = [];
      if (state.type === 'anime') {
        animes = [action.payload];
      } else {
        mangas = [action.payload];
      }
      return {
        ...state,
        anime: animes,
        manga: mangas,
        loading: false,
      };
    case SeriesActionsTypes.SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
