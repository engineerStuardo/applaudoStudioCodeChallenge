import {useContext} from 'react';

import {FavoritesContext} from '../Context/FavoritesContext';

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};
