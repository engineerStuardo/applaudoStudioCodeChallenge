import React from 'react';
import {View, FlatList, Image, Text} from 'react-native';
import {useFavoritesContext} from '../Context/FavoritesCustomHook';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';

const NoFavoritesContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FavoritesText = styled(Text)`
  font-size: 35px;
  margin-bottom: 30px;
`;

const NoFavoriteText = styled(Text)`
  font-size: 17px;
  margin-bottom: 50px;
`;

const FavoriteButton = styled(Button)`
  margin-top: 10px;
  padding: 5px;
`;

export {NoFavoritesContainer, FavoritesText, NoFavoriteText, FavoriteButton};
