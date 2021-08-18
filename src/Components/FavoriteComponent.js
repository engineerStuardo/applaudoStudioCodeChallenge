import React from 'react';
import {View, Dimensions, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AnimeDescription} from './AnimeDescription';

const {width, height} = Dimensions.get('screen');

export const FavoriteComponent = ({favorite}) => {
  const navigation = useNavigation();
  console.log(JSON.stringify(favorite, null, 2));

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Anime', {
          screen: 'AnimeDetail',
          params: {animeId: favorite.item.id, isFavorite: true},
        })
      }>
      <View
        style={{
          paddingLeft: width / 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AnimeDescription anime={favorite.item} />
      </View>
    </TouchableOpacity>
  );
};
