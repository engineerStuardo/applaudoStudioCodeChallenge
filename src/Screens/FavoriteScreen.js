import React from 'react';
import {View, FlatList} from 'react-native';
import {useFavoritesContext} from '../Context/FavoritesCustomHook';

import {FavoriteComponent} from '../Components/FavoriteComponent';

export const FavoriteScreen = () => {
  const {favorites} = useFavoritesContext();
  return (
    <View>
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
