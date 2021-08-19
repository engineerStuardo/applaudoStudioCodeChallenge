import React from 'react';

import {FavoriteContainer} from '../Styles/FavoriteScreenStyles';
import {NoFavorites} from '../Components/NoFavorites';
import {Favorites} from '../Components/Favorites';
import {useFavoritesContext} from '../Context/FavoritesCustomHook';

export const FavoriteScreen = () => {
  const {favorites} = useFavoritesContext();

  return (
    <FavoriteContainer>
      {favorites.length > 0 ? <Favorites /> : <NoFavorites />}
    </FavoriteContainer>
  );
};
