import React from 'react';
import {View, FlatList, Image} from 'react-native';
import {useFavoritesContext} from '../Context/FavoritesCustomHook';
import * as Animatable from 'react-native-animatable';

import {FavoriteComponent} from '../Components/FavoriteComponent';

export const FavoriteScreen = () => {
  const {favorites} = useFavoritesContext();
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Animatable.Image
        animation="zoomIn"
        iterationCount="infinite"
        style={{width: '100%', height: 200}}
        source={require('../Assets/Images/favorite.jpg')}
      />
      {favorites && (
        <FlatList
          data={favorites}
          renderItem={favorite => <FavoriteComponent favorite={favorite} />}
          keyExtractor={favorite => favorite.id}
        />
      )}
    </View>
  );
};
