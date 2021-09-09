import {SeriesActionsTypes} from '../Types/favoritesTypes';

export const addFavorites = favorite => ({
  type: SeriesActionsTypes.ADD_FAVORITES,
  payload: favorite,
});

export const removeFavorites = (id, type) => ({
  type: SeriesActionsTypes.REMOVE_FAVORITES,
  payload: {
    id,
    type,
  },
});
