import {SeriesActionsTypes} from '../Types/seriesTypes';

const initialState = {
  loading: false,
  loadingFooter: false,
  loadingSearch: false,
  type: '',
  anime: {},
  manga: {},
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
    case SeriesActionsTypes.DATA_STARTED:
      return {
        ...state,
        loading: true,
      };
    case SeriesActionsTypes.DATA_SUCCESS:
      let animes = {};
      let mangas = {};
      if (state.type === 'anime') {
        animes = action.payload.data;
        mangas = state.manga;
      } else {
        mangas = action.payload.data;
        animes = state.anime;
      }
      return {
        ...state,
        anime: animes,
        manga: mangas,
        loading: false,
      };
    case SeriesActionsTypes.DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
