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

const {width} = Dimensions.get('screen');

export const Description = ({dataInfo}) => {
  const {favorites} = useFavoritesContext();
  const {
    attributes: {
      posterImage,
      titles,
      popularityRank,
      ratingRank,
      episodeCount,
      episodeLength,
    },
    id: dataId,
    type: dataType,
  } = dataInfo;

  const isFavorite = favorites.find(
    item => item.id === dataId && item.type === dataType,
  );

  return (
    <DescriptionContainer>
      <AvatarImage
        source={{
          uri: posterImage.original,
        }}
      />
      <View>
        <FavoriteButton data={dataInfo} isFavorite={isFavorite} isDescription />
      </View>
      <InfoContainer animeWidth={width}>
        <TitleText>{titles.en || titles.en_jp}</TitleText>
        <SubTitleText>Popularity Rank: </SubTitleText>
        <Text>{popularityRank || 'Not Found'}</Text>
        <SubTitleText>Rating Rank:</SubTitleText>
        <Text> {ratingRank || 'Not Found'}</Text>
        <SubTitleText>Episode Count:</SubTitleText>
        <Text> {episodeCount || 'Not Found'}</Text>
        <SubTitleText>Episode Length:</SubTitleText>
        <Text> {episodeLength || 'Not Found'}</Text>
      </InfoContainer>
    </DescriptionContainer>
  );
};
