import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

const FavoritesContainer = styled(Animatable.View)`
  flex: 1;
  flex-direction: ${({isPortrait}) => (isPortrait ? 'column' : 'row')};
  align-items: ${({isPortrait}) => (isPortrait ? 'stretch' : 'center')};
`;

const FavoriteImage = styled(Animatable.Image)`
  width: ${({isPortrait, orientation}) =>
    isPortrait ? '100%' : orientation.width < 700 ? '150px' : '350px'};
  height: ${({isPortrait, orientation}) =>
    isPortrait ? '200px' : orientation.width < 700 ? '50px' : '300px'};
`;

export {FavoriteImage, FavoritesContainer};
