import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

const FavoritesContainer = styled(Animatable.View)`
  flex: 1;
  flex-direction: ${({isPortrait}) => (isPortrait ? 'column' : 'row')};
`;

const FavoriteImage = styled(Animatable.Image)`
  width: ${({isPortrait}) => (isPortrait ? '100%' : '350px')};
  height: ${({isPortrait}) => (isPortrait ? '200px' : '300px')};
`;

export {FavoriteImage, FavoritesContainer};
