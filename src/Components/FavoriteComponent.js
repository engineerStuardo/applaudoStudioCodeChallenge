import React from 'react';
import {View, Dimensions, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Divider} from 'react-native-paper';

import {Description} from './Description';
import {DescriptionContainer} from '../Styles/FavoriteComponentStyles';

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
        <DescriptionContainer animeWidth={width}>
          <Description anime={favorite.item} />
        </DescriptionContainer>
      </TouchableOpacity>
    </>
  );
};
