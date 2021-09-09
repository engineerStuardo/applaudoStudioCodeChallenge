import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useDispatch} from 'react-redux';

import {FavoriteIcon} from '../Styles/FavoriteButtonStyles';
import * as actions from '../Redux/Actions/favoritesActions';

export const FavoriteButton = ({data, isFavorite, isDescription}) => {
  const dispatch = useDispatch();

  return (
    <FavoriteIcon
      onPress={() => {
        !isFavorite
          ? dispatch(
              actions.addFavorites(isDescription ? data.data : data.item),
            )
          : dispatch(
              actions.removeFavorites(
                isDescription ? data.data.id : data.item.id,
                isDescription ? data.data.type : data.item.type,
              ),
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
