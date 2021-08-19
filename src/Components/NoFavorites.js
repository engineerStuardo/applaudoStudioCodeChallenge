import React from 'react';
import {View, FlatList, Image, Text} from 'react-native';
import {useFavoritesContext} from '../Context/FavoritesCustomHook';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {
  NoFavoritesContainer,
  FavoritesText,
  NoFavoriteText,
  FavoriteButton,
} from '../Styles/NoFavoritesStyles';

export const NoFavorites = () => {
  const navigation = useNavigation();

  return (
    <NoFavoritesContainer>
      <Animatable.View animation="pulse" iterationCount="infinite">
        <Icon name={'heart'} size={50} color={'orange'} />
      </Animatable.View>
      <FavoritesText>Favorites</FavoritesText>
      <NoFavoriteText>No favorites yet...</NoFavoriteText>
      <FavoriteButton
        icon="heart"
        mode="outlined"
        color={'#f08e25'}
        onPress={() => navigation.navigate('Anime', {screen: 'AnimeScreen'})}>
        Go to Anime
      </FavoriteButton>
      <Text>or</Text>
      <FavoriteButton
        icon="heart"
        mode="outlined"
        color={'#f08e25'}
        onPress={() => navigation.navigate('Manga', {screen: 'MangaScreen'})}>
        Go to Manga
      </FavoriteButton>
    </NoFavoritesContainer>
  );
};
