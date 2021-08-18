import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useFavoritesContext} from '../Context/FavoritesCustomHook';
import {FavoriteButton} from './FavouriteButton';

export const CardList = ({anime}) => {
  const {
    item: {
      attributes: {
        posterImage: {original},
      },
    },
  } = anime;

  const {favorites} = useFavoritesContext();

  const navigation = useNavigation();

  const isFavorite = favorites.find(item => item.id === anime.item.id);

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AnimeDetail', {animeId: anime.item.id})
        }>
        <Image
          style={{width: 125, height: 225, margin: 20, borderRadius: 25}}
          source={{
            uri: original,
          }}
        />
      </TouchableOpacity>
      <FavoriteButton anime={anime} isFavorite={isFavorite} />
    </View>
  );
};
