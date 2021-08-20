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
    },
  } = dataItem;
  const {type} = useTypeContext();
  const redirectTo = type === 'anime' ? 'AnimeDetail' : 'MangaDetail';
  const {favorites} = useFavoritesContext();
  const isFavorite = favorites.find(item => item.id === dataItem.item.id);

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(redirectTo, {
            id: dataItem.item.id,
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
