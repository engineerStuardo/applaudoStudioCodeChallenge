import {SeriesActionsTypes} from '../Types/seriesTypes';
import {getFullDataAnime, getFullDataManga} from '../../Services/Services';

export const addType = type => ({
  type: SeriesActionsTypes.ADD_TYPE,
  payload: type,
});

export const getDataAnime = (start, offset, more = false) => {
  return async dispatch => {
    dispatch(animeStarted(start, more));
    try {
      if (start) {
        const data = await getFullDataAnime(0);
        dispatch(animeSuccess(data, start));
      } else {
        const data = await getFullDataAnime(offset);
        dispatch(animeSuccess(data, start, more));
      }
    } catch (error) {
      dispatch(animeFailure(error));
    }
  };
};

const animeSuccess = (data, start, more) => ({
  type: SeriesActionsTypes.DATA_ANIME_SUCCESS,
  payload: {
    data,
    start,
    more,
  },
});

const animeStarted = (start, more) => ({
  type: SeriesActionsTypes.DATA_ANIME_STARTED,
  payload: {start, more},
});

const animeFailure = error => ({
  type: SeriesActionsTypes.DATA_MANGA_FAILURE,
  payload: {
    error,
  },
});

export const getDataManga = (start, offset, more = false) => {
  return async dispatch => {
    dispatch(mangaStarted(start, more));
    try {
      if (start) {
        const data = await getFullDataManga(0);
        dispatch(mangaSuccess(data, start));
      } else {
        const data = await getFullDataManga(offset);
        dispatch(mangaSuccess(data, start, more));
      }
    } catch (error) {
      dispatch(mangaFailure(error));
    }
  };
};

const mangaSuccess = (data, start, more) => ({
  type: SeriesActionsTypes.DATA_MANGA_SUCCESS,
  payload: {
    data,
    start,
    more,
  },
});

const mangaStarted = (start, more) => ({
  type: SeriesActionsTypes.DATA_MANGA_STARTED,
  payload: {start, more},
});

const mangaFailure = error => ({
  type: SeriesActionsTypes.DATA_MANGA_FAILURE,
  payload: {
    error,
  },
});
