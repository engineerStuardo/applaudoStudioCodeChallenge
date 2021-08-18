import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styled from 'styled-components/native';

import {useFavoritesContext} from '../Context/FavoritesCustomHook';

const FavoriteIcon = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const FavoriteButton = ({anime, isFavorite, isDescription}) => {
  const {addToFavorites, removeFromFavorites} = useFavoritesContext();

  return (
    <FavoriteIcon
      onPress={() => {
        !isFavorite
          ? addToFavorites(isDescription ? anime : anime.item)
          : removeFromFavorites(isDescription ? anime.id : anime.item.id);
      }}>
      <Icon
        name={'heart'}
        size={35}
        color={isFavorite ? 'orange' : '#919191'}
      />
    </FavoriteIcon>
  );
};
