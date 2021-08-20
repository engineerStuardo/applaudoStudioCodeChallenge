import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Divider} from 'react-native-paper';

import {Description} from './Description';
import {DescriptionContainer} from '../Styles/FavoriteComponentStyles';

const {width} = Dimensions.get('screen');

export const FavoriteComponent = ({favorite}) => {
  const navigation = useNavigation();

  const {
    item: {id: favoriteId, type: favoriteType},
  } = favorite;

  return (
    <>
      <Divider />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AnimeFavoriteDetail', {
            id: favoriteId,
            type: favoriteType,
          })
        }>
        <DescriptionContainer animeWidth={width}>
          <Description dataInfo={favorite.item} />
        </DescriptionContainer>
      </TouchableOpacity>
    </>
  );
};
