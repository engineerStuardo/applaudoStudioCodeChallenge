import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useFavoritesContext} from '../Context/FavoritesCustomHook';

import {AnimeDescription} from '../Components/AnimeDescription';

export const FavoriteScreen = () => {
  const {favorites} = useFavoritesContext();
  return (
    <View>
      {favorites && (
        <FlatList
          data={favorites}
          renderItem={favorite => <AnimeDescription anime={favorite.item} />}
          keyExtractor={favorite => favorite.id}
        />
      )}
    </View>
  );
};
