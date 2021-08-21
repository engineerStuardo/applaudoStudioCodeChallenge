import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';

const NoFavoritesContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => (props.isPortrait ? 'column' : 'row')};
  margin-top: ${props => (props.isPortrait ? '0px' : '35px')}; ;
`;

const Container = styled(View)`
  align-items: center;
  align-self: center;
  justify-content: center;
  margin-right: ${props => (props.isPortrait ? '0px' : '30px')};
  margin-bottom: ${props =>
    props.applyMargin && !props.isPortrait ? '40px' : '0px'};
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

export {
  NoFavoritesContainer,
  Container,
  FavoritesText,
  NoFavoriteText,
  FavoriteButton,
};
