import React from 'react';
import {View, Text} from 'react-native';

import {FavoriteButton} from '../Components/FavouriteButton';
import {useFavoritesContext} from '../CustomHooks/useFavoritesContext';
import {
  DescriptionContainer,
  AvatarImage,
  InfoContainer,
  TitleText,
  SubTitleText,
} from '../Styles/DescriptionStyles';
import {useOrientation} from '../CustomHooks/useOrientation';

export const Description = ({dataInfo}) => {
  const {favorites} = useFavoritesContext();
  const {
    data: {
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
    },
  } = dataInfo;
  const orientation = useOrientation();

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
      <InfoContainer isPortrait={orientation.isPortrait}>
        <TitleText>{titles.en || titles.en_jp || 'Title Not found'}</TitleText>
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
