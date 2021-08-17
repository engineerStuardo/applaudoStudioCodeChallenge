import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import {useFavoritesContext} from '../Context/FavoritesCustomHook';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const CardList = ({anime}) => {
  const {
    item: {
      attributes: {
        posterImage: {original},
      },
    },
  } = anime;

  const {favorites, addToFavorites, removeFromFavorites} =
    useFavoritesContext();

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
      <FavouriteButton
        onPress={() => {
          !isFavorite
            ? addToFavorites(anime.item)
            : removeFromFavorites(anime.item.id);
        }}>
        <Icon
          name={'heart'}
          size={35}
          color={isFavorite ? 'orange' : '#919191'}
        />
      </FavouriteButton>
    </View>
  );
};
