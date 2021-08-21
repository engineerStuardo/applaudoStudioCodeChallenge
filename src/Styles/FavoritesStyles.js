import * as Animatable from 'react-native-animatable';
import {View} from 'react-native';
import styled from 'styled-components/native';

const FavoritesContainer = styled(View)`
  flex: 1;
  flex-direction: ${props => (props.isPortrait ? 'column' : 'row')};
`;

const FavoriteImage = styled(Animatable.Image)`
  width: ${props => (props.isPortrait ? '100%' : '350px')};
  height: ${props => (props.isPortrait ? '200px' : '300px')};
`;

export {FavoriteImage, FavoritesContainer};
