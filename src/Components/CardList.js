import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useFavoritesContext} from '../Context/FavoritesCustomHook';
import {FavoriteButton} from './FavouriteButton';
import {CardImage} from '../Styles/CardListStyles';
import {useTypeContext} from '../Context/TypeCustomHook';

export const CardList = ({dataItem}) => {
  const {
    item: {
      attributes: {
        posterImage: {original},
      },
      id: dataId,
      type: dataType,
    },
  } = dataItem;

  const {type} = useTypeContext();
  const redirectTo = type === 'anime' ? 'AnimeDetail' : 'MangaDetail';
  const {favorites} = useFavoritesContext();
  const isFavorite = favorites.find(
    item => item.id === dataId && dataType === item.type,
  );

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(redirectTo, {
            id: dataId,
            type: type,
          })
        }>
        <CardImage
          source={{
            uri: original,
          }}
        />
      </TouchableOpacity>
      <FavoriteButton data={dataItem} isFavorite={isFavorite} />
    </View>
  );
};
