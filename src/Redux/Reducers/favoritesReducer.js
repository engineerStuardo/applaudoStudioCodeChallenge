import {SeriesActionsTypes} from '../Types/favoritesTypes';

const initialState = {
  favorites: [],
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SeriesActionsTypes.ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case SeriesActionsTypes.REMOVE_FAVORITES:
      const newFavorites = state.favorites.filter(fav => {
        if (fav.id !== action.payload.id) {
          return fav;
        } else if (fav.type !== action.payload.type) {
          return fav;
        }
      });
      return {
        ...state,
        favorites: newFavorites,
      };

    default:
      return state;
  }
};
