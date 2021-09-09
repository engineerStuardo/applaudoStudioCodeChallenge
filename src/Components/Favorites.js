import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {FavoriteImage, FavoritesContainer} from '../Styles/FavoritesStyles';
import {FavoriteComponent} from './FavoriteComponent';
import {useFavoritesContext} from '../CustomHooks/useFavoritesContext';
import {useOrientation} from '../CustomHooks/useOrientation';

export const Favorites = () => {
  const {favorites} = useSelector(state => state.favoritesReducer);
  console.log(favorites);
  const orientation = useOrientation();

  const renderItem = favorite => <FavoriteComponent favorite={favorite} />;
  const keyExtractor = favorite => `${favorite.id}+${Math.random()}`;

  return (
    <FavoritesContainer animation="flipInX" isPortrait={orientation.isPortrait}>
      <FavoriteImage
        isPortrait={orientation.isPortrait}
        orientation={orientation}
        animation="pulse"
        iterationCount="infinite"
        source={require('../Assets/Images/favorite.jpg')}
      />
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        persistentScrollbar={true}
      />
    </FavoritesContainer>
  );
};
