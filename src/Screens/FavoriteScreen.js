import React from 'react';
import {View} from 'react-native';
import {useFavoritesContext} from '../Context/FavoritesCustomHook';

import {NoFavorites} from '../Components/NoFavorites';
import {Favorites} from '../Components/Favorites';

export const FavoriteScreen = () => {
  const {favorites} = useFavoritesContext();

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      {favorites.length > 0 ? (
        <Favorites favorites={favorites} />
      ) : (
        <NoFavorites />
      )}
    </View>
  );
};
