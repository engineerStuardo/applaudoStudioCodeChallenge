import React from 'react';
import {FlatList, View} from 'react-native';

import {FavoriteImage} from '../Styles/FavoritesStyles';
import {FavoriteComponent} from './FavoriteComponent';
import {useFavoritesContext} from '../Context/FavoritesCustomHook';

export const Favorites = () => {
  const {favorites} = useFavoritesContext();

  return (
    <>
      <FavoriteImage
        animation="zoomIn"
        iterationCount="infinite"
        source={require('../Assets/Images/favorite.jpg')}
      />
      <FlatList
        data={favorites}
        renderItem={favorite => <FavoriteComponent favorite={favorite} />}
        keyExtractor={favorite => favorite.id}
      />
    </>
  );
};
