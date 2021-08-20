import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
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
            type: favorite.item.type,
          })
        }>
        <DescriptionContainer animeWidth={width}>
          <Description dataInfo={favorite.item} />
        </DescriptionContainer>
      </TouchableOpacity>
    </>
  );
};
