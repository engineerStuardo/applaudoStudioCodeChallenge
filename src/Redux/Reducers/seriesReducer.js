import {SeriesActionsTypes} from '../Types/seriesTypes';

const initialState = {
  loading: false,
  loadingFooter: false,
  loadingSearch: false,
  type: '',
  anime: [],
  manga: [],
  offsetAnime: 0,
  offsetManga: 0,
  searchText: '',
  error: '',
};

export const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SeriesActionsTypes.ADD_TYPE:
      return {
        ...state,
        type: action.payload,
        offsetAnime: 0,
        offsetManga: 0,
      };
    case SeriesActionsTypes.DATA_STARTED:
      return {
        ...state,
        loading: action.payload.more ? false : true,
        loadingFooter: action.payload.more ? true : false,
      };
    case SeriesActionsTypes.DATA_SUCCESS:
      let animes = [];
      let mangas = [];
      let offsetAnimes = 0;
      let offsetMangas = 0;
      if (state.type === 'anime') {
        animes = [...state.anime, ...action.payload.data];
        offsetAnimes = action.payload.start ? 0 : state.offsetAnime + 10;
        offsetMangas = state.offsetManga;
      } else {
        mangas = [...state.manga, ...action.payload.data];
        offsetMangas = action.payload.start ? 0 : state.offsetManga + 10;
        offsetAnimes = state.offsetAnime;
      }
      return {
        ...state,
        anime: animes,
        manga: mangas,
        loading: false,
        loadingFooter: false,
        offsetAnime: offsetAnimes,
        offsetManga: offsetMangas,
      };
    case SeriesActionsTypes.DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        loadingFooter: false,
      };

    default:
      return state;
  }
};
