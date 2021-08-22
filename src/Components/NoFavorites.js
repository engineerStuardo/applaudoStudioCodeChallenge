import React from 'react';
import {Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import {
  NoFavoritesContainer,
  Container,
  FavoritesText,
  NoFavoriteText,
  FavoriteButton,
} from '../Styles/NoFavoritesStyles';

export const NoFavorites = ({isPortrait}) => {
  const navigation = useNavigation();

  return (
    <NoFavoritesContainer isPortrait={isPortrait}>
      <Container isPortrait={isPortrait}>
        <Animatable.View animation="pulse" iterationCount="infinite">
          <Icon name={'heart'} size={50} color={'orange'} />
        </Animatable.View>
        <FavoritesText>Favorites</FavoritesText>
        <NoFavoriteText>No favorites yet...</NoFavoriteText>
      </Container>
      <Container applyMargin isPortrait={isPortrait}>
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
      </Container>
    </NoFavoritesContainer>
  );
};
