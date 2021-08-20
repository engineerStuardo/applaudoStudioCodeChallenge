import React from 'react';
import {FlatList} from 'react-native';

import {FavoriteImage} from '../Styles/FavoritesStyles';
import {FavoriteComponent} from './FavoriteComponent';
import {useFavoritesContext} from '../Context/FavoritesCustomHook';

export const Favorites = () => {
  const {favorites} = useFavoritesContext();

  const renderItem = favorite => <FavoriteComponent favorite={favorite} />;
  const keyExtractor = favorite => `${favorite.id}+${Math.random()}`;

  return (
    <>
      <FavoriteImage
        animation="zoomIn"
        iterationCount="infinite"
        source={require('../Assets/Images/favorite.jpg')}
      />
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </>
  );
};
