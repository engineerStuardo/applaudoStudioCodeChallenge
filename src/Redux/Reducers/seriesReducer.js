import {SeriesActionsTypes} from '../Types/seriesTypes';

const initialState = {
  loadingAnime: false,
  loadingManga: false,
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
      };
    case SeriesActionsTypes.DATA_ANIME_STARTED:
      return {
        ...state,
        loadingAnime: action.payload.more ? false : true,
        loadingFooter: action.payload.more ? true : false,
      };
    case SeriesActionsTypes.DATA_ANIME_SUCCESS:
      let animes = [];
      let offsetAnimes = 0;
      animes = [...state.anime, ...action.payload.data];
      offsetAnimes = action.payload.start ? 0 : state.offsetAnime + 10;
      return {
        ...state,
        anime: animes,
        loadingAnime: false,
        loadingFooter: false,
        offsetAnime: offsetAnimes,
      };
    case SeriesActionsTypes.DATA_ANIME_FAILURE:
      return {
        ...state,
        error: action.payload,
        loadingAnime: false,
        loadingFooter: false,
      };
    case SeriesActionsTypes.DATA_MANGA_STARTED:
      return {
        ...state,
        loadingManga: action.payload.more ? false : true,
        loadingFooter: action.payload.more ? true : false,
      };
    case SeriesActionsTypes.DATA_MANGA_SUCCESS:
      let mangas = [];
      let offsetManga = 0;
      mangas = [...state.manga, ...action.payload.data];
      offsetManga = action.payload.start ? 0 : state.offsetManga + 10;
      return {
        ...state,
        manga: mangas,
        loadingManga: false,
        loadingFooter: false,
        offsetManga: offsetManga,
      };
    case SeriesActionsTypes.DATA_MANGA_FAILURE:
      return {
        ...state,
        error: action.payload,
        loadingManga: false,
        loadingFooter: false,
      };

    default:
      return state;
  }
};
