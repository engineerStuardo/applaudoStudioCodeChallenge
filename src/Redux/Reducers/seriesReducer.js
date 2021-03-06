import {SeriesActionsTypes} from '../Types/seriesTypes';

const initialState = {
  loading: false,
  loadingAnime: false,
  loadingManga: false,
  loadingFooter: false,
  type: '',
  anime: [],
  animeDetail: {},
  manga: [],
  mangaDetail: {},
  offsetAnime: 0,
  offsetAnimeSearch: 0,
  offsetManga: 0,
  offsetMangaSearch: 0,
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
      if (action.payload.start) {
        animes = action.payload.data;
        offsetAnimes = 10;
      } else {
        animes = [...state.anime, ...action.payload.data];
        offsetAnimes = action.payload.start ? 0 : state.offsetAnime + 10;
      }
      return {
        ...state,
        anime: animes,
        loadingAnime: false,
        loadingFooter: false,
        offsetAnime: offsetAnimes,
        offsetAnimeSearch: 0,
        searchText: '',
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
      if (action.payload.start) {
        mangas = action.payload.data;
        offsetManga = 10;
      } else {
        mangas = [...state.manga, ...action.payload.data];
        offsetManga = action.payload.start ? 0 : state.offsetManga + 10;
      }
      return {
        ...state,
        manga: mangas,
        loadingManga: false,
        loadingFooter: false,
        offsetManga: offsetManga,
        searchText: '',
      };
    case SeriesActionsTypes.DATA_MANGA_FAILURE:
      return {
        ...state,
        error: action.payload,
        loadingManga: false,
        loadingFooter: false,
      };
    case SeriesActionsTypes.DATA_ANIME_BY_ID_STARTED:
      return {
        ...state,
        loading: true,
        animeDetail: {},
      };
    case SeriesActionsTypes.DATA_ANIME_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        animeDetail: action.payload,
      };
    case SeriesActionsTypes.DATA_ANIME_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case SeriesActionsTypes.DATA_MANGA_BY_ID_STARTED:
      return {
        ...state,
        loading: true,
        mangaDetail: {},
      };
    case SeriesActionsTypes.DATA_MANGA_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        mangaDetail: action.payload,
      };
    case SeriesActionsTypes.DATA_MANGA_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case SeriesActionsTypes.DATA_ANIME_SEARCH_STARTED:
      let loadingAnimes = false;
      let loadingFooterSearch = false;
      if (action.payload.start) {
        loadingAnimes = true;
      } else {
        loadingFooterSearch = true;
      }
      return {
        ...state,
        loadingAnime: loadingAnimes,
        loadingFooter: loadingFooterSearch,
        anime: action.payload.start ? [] : state.anime,
      };
    case SeriesActionsTypes.DATA_ANIME_SEARCH_SUCCESS:
      let animesFilter = [];
      if (action.payload.start) {
        animesFilter = action.payload.data;
      } else {
        animesFilter = [...state.anime, ...action.payload.data];
      }
      return {
        ...state,
        loadingAnime: false,
        loadingFooter: false,
        anime: animesFilter,
        searchText: action.payload.text,
        offsetAnimeSearch: state.offsetAnimeSearch + 10,
      };
    case SeriesActionsTypes.DATA_ANIME_SEARCH_FAILURE:
      return {
        ...state,
        loadingAnime: false,
        loadingFooter: false,
        error: action.payload.error,
      };
    case SeriesActionsTypes.DATA_MANGA_SEARCH_STARTED:
      let loadingMangas = false;
      let loadingFooterSearchManga = false;
      if (action.payload.start) {
        loadingMangas = true;
      } else {
        loadingFooterSearchManga = true;
      }
      return {
        ...state,
        loadingManga: loadingMangas,
        loadingFooter: loadingFooterSearchManga,
        manga: action.payload.start ? [] : state.manga,
      };
    case SeriesActionsTypes.DATA_MANGA_SEARCH_SUCCESS:
      let mangasFilter = [];
      if (action.payload.start) {
        mangasFilter = action.payload.data;
      } else {
        mangasFilter = [...state.manga, ...action.payload.data];
      }
      return {
        ...state,
        loadingManga: false,
        loadingFooter: false,
        manga: mangasFilter,
        searchText: action.payload.text,
        offsetMangaSearch: state.offsetMangaSearch + 10,
      };
    case SeriesActionsTypes.DATA_MANGA_SEARCH_FAILURE:
      return {
        ...state,
        loadingManga: false,
        loadingFooter: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
