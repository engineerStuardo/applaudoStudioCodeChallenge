import React from 'react';
import {View, Dimensions, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Divider} from 'react-native-paper';

import {AnimeDescription} from './AnimeDescription';
import {AnimeDescriptionContainer} from '../Styles/FavoriteComponentStyles';

const {width, height} = Dimensions.get('screen');

export const FavoriteComponent = ({favorite}) => {
  const navigation = useNavigation();

  return (
    <>
      <Divider />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AnimeFavoriteDetail', {
            animeId: favorite.item.id,
          })
        }>
        <AnimeDescriptionContainer animeWidth={width}>
          <AnimeDescription anime={favorite.item} />
        </AnimeDescriptionContainer>
      </TouchableOpacity>
    </>
  );
};
