import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useFavoritesContext} from '../Context/FavoritesCustomHook';
import {FavoriteButton} from './FavouriteButton';
import {CardImage} from '../Styles/CardListStyles';

export const CardList = ({anime}) => {
  const {
    item: {
      attributes: {
        posterImage: {original},
      },
    },
  } = anime;

  const {favorites} = useFavoritesContext();
  const isFavorite = favorites.find(item => item.id === anime.item.id);

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AnimeDetail', {animeId: anime.item.id})
        }>
        <CardImage
          source={{
            uri: original,
          }}
        />
      </TouchableOpacity>
      <FavoriteButton anime={anime} isFavorite={isFavorite} />
    </View>
  );
};
