import React from 'react';
import {FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {FavoriteComponent} from './FavoriteComponent';

export const Favorites = ({favorites}) => {
  return (
    <>
      <Animatable.Image
        animation="zoomIn"
        iterationCount="infinite"
        style={{width: '100%', height: 200}}
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
