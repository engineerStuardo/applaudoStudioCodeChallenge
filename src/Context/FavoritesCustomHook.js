import {useContext} from 'react';

import {FavoritesContext} from './FavoritesContext';

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};
