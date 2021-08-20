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
import {useTypeContext} from '../Context/TypeCustomHook';

const {width, height} = Dimensions.get('screen');

export const Description = ({dataInfo}) => {
  const {favorites} = useFavoritesContext();
  const {type} = useTypeContext();

  const isFavorite = favorites.find(
    item => item.id === dataInfo.id && item.type === type,
  );

  return (
    <DescriptionContainer>
      <AvatarImage
        source={{
          uri: dataInfo.attributes.posterImage.original,
        }}
      />
      <View>
        <FavoriteButton data={dataInfo} isFavorite={isFavorite} isDescription />
      </View>
      <InfoContainer animeWidth={width}>
        <TitleText>
          {dataInfo.attributes.titles.en || dataInfo.attributes.titles.en_jp}
        </TitleText>
        <SubTitleText>Popularity Rank: </SubTitleText>
        <Text>{dataInfo.attributes.popularityRank || 'Not Found'}</Text>
        <SubTitleText>Rating Rank:</SubTitleText>
        <Text> {dataInfo.attributes.ratingRank || 'Not Found'}</Text>
        <SubTitleText>Episode Count:</SubTitleText>
        <Text> {dataInfo.attributes.episodeCount || 'Not Found'}</Text>
        <SubTitleText>Episode Length:</SubTitleText>
        <Text> {dataInfo.attributes.episodeLength || 'Not Found'}</Text>
      </InfoContainer>
    </DescriptionContainer>
  );
};
