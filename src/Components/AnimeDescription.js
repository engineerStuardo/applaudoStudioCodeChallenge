import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styled from 'styled-components/native';

import {FavoriteButton} from '../Components/FavouriteButton';
import {useFavoritesContext} from '../Context/FavoritesCustomHook';
import {
  AnimeDescriptionContainer,
  AnimeImage,
  AnimeInfoContainer,
  TitleText,
  SubTitleText,
} from '../Styles/AnimeDescriptionStyles';

const {width, height} = Dimensions.get('screen');

export const AnimeDescription = ({anime}) => {
  const {favorites} = useFavoritesContext();
  const isFavorite = favorites.find(item => item.id === anime.id);

  return (
    <AnimeDescriptionContainer>
      <AnimeImage
        source={{
          uri: anime.attributes.posterImage.original,
        }}
      />
      <View>
        <FavoriteButton anime={anime} isFavorite={isFavorite} isDescription />
      </View>
      <AnimeInfoContainer animeWidth={width}>
        <TitleText>
          {anime.attributes.titles.en || anime.attributes.titles.en_jp}
        </TitleText>
        <SubTitleText>Popularity Rank: </SubTitleText>
        <Text>{anime.attributes.popularityRank || 'Not Found'}</Text>
        <SubTitleText>Rating Rank:</SubTitleText>
        <Text> {anime.attributes.ratingRank || 'Not Found'}</Text>
        <SubTitleText>Episode Count:</SubTitleText>
        <Text> {anime.attributes.episodeCount || 'Not Found'}</Text>
        <SubTitleText>Episode Length:</SubTitleText>
        <Text> {anime.attributes.episodeLength || 'Not Found'}</Text>
      </AnimeInfoContainer>
    </AnimeDescriptionContainer>
  );
};
