import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import {FavoriteButton} from '../Components/FavouriteButton';
import {useFavoritesContext} from '../Context/FavoritesCustomHook';
import {
  DescriptionContainer,
  AvatarImage,
  InfoContainer,
  TitleText,
  SubTitleText,
} from '../Styles/DescriptionStyles';

const {width, height} = Dimensions.get('screen');

export const Description = ({anime}) => {
  const {favorites} = useFavoritesContext();
  const isFavorite = favorites.find(item => item.id === anime.id);

  return (
    <DescriptionContainer>
      <AvatarImage
        source={{
          uri: anime.attributes.posterImage.original,
        }}
      />
      <View>
        <FavoriteButton anime={anime} isFavorite={isFavorite} isDescription />
      </View>
      <InfoContainer animeWidth={width}>
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
      </InfoContainer>
    </DescriptionContainer>
  );
};
