import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
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
