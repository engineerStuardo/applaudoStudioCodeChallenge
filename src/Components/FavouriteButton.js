import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styled from 'styled-components/native';

import {useFavoritesContext} from '../Context/FavoritesCustomHook';
import {useTypeContext} from '../Context/TypeCustomHook';

const FavoriteIcon = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const FavoriteButton = ({data, isFavorite, isDescription}) => {
  const {type} = useTypeContext();
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
