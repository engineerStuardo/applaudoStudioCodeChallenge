import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {useFavoritesContext} from '../CustomHooks/useFavoritesContext';
import {FavoriteIcon} from '../Styles/FavoriteButtonStyles';

export const FavoriteButton = ({data, isFavorite, isDescription}) => {
  const {addToFavorites, removeFromFavorites} = useFavoritesContext();

  return (
    <FavoriteIcon
      onPress={() => {
        !isFavorite
          ? addToFavorites(isDescription ? data : data.item)
          : removeFromFavorites(
              isDescription ? data.id : data.item.id,
              isDescription ? data.type : data.item.type,
            );
      }}>
      <Icon
        name={'heart'}
        size={35}
        color={isFavorite ? 'orange' : '#919191'}
      />
    </FavoriteIcon>
  );
};
