import React from 'react';

import {FavoriteContainer} from '../Styles/FavoriteScreenStyles';
import {NoFavorites} from '../Components/NoFavorites';
import {Favorites} from '../Components/Favorites';
import {useFavoritesContext} from '../CustomHooks/useFavoritesContext';
import {useOrientation} from '../CustomHooks/useOrientation';

export const FavoriteScreen = () => {
  const {favorites} = useFavoritesContext();
  const orientation = useOrientation();

  return (
    <FavoriteContainer>
      {favorites.length > 0 ? (
        <Favorites />
      ) : (
        <NoFavorites isPortrait={orientation.isPortrait} />
      )}
    </FavoriteContainer>
  );
};
