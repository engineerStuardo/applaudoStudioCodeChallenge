import React from 'react';
import {View, Dimensions, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Divider} from 'react-native-paper';

import {AnimeDescription} from './AnimeDescription';

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
        <View
          style={{
            paddingLeft: width / 150,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AnimeDescription anime={favorite.item} />
        </View>
      </TouchableOpacity>
    </>
  );
};
