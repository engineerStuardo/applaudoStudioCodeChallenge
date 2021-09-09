import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {useFavoritesContext} from '../CustomHooks/useFavoritesContext';
import {FavoriteButton} from './FavouriteButton';
import {CardImage} from '../Styles/CardListStyles';
import {useTypeContext} from '../CustomHooks/useTypeContext';
import {useOrientation} from '../CustomHooks/useOrientation';

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

  const {favorites} = useSelector(state => state.favoritesReducer);
  const {type} = useSelector(state => state.seriesReducer);
  const orientation = useOrientation();
  const redirectTo = type === 'anime' ? 'AnimeDetail' : 'MangaDetail';
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
          orientation={orientation}
          isPortrait={orientation.isPortrait}
          source={{
            uri: original,
          }}
        />
      </TouchableOpacity>
      <FavoriteButton data={dataItem} isFavorite={isFavorite} />
    </View>
  );
};
