import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {FavoriteContainer} from '../Styles/FavoriteScreenStyles';
import {NoFavorites} from '../Components/NoFavorites';
import {Favorites} from '../Components/Favorites';
import {useFavoritesContext} from '../CustomHooks/useFavoritesContext';
import {useOrientation} from '../CustomHooks/useOrientation';
import {NoConnection} from '../Components/NoConnection';
import {useCheckInternet} from '../CustomHooks/useCheckInternet';

export const FavoriteScreen = () => {
  const {favorites} = useSelector(state => state.favoritesReducer);
  const orientation = useOrientation();
  const {internet, checkInternet} = useCheckInternet();

  useFocusEffect(
    useCallback(() => {
      checkInternet();
    }, []),
  );

  return (
    <FavoriteContainer>
      {internet ? (
        favorites.length > 0 ? (
          <Favorites />
        ) : (
          <NoFavorites isPortrait={orientation.isPortrait} />
        )
      ) : (
        <NoConnection checkInternet={checkInternet} />
      )}
    </FavoriteContainer>
  );
};
