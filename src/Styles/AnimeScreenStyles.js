import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

const AnimeScreenContainer = styled(View)`
  flex: 1;
  background-color: #ffffff;
  flex-direction: ${props => (props.isPortrait ? 'column' : 'row')};
  align-items: ${props => (props.isPortrait ? 'stretch' : 'center')};
`;

const AnimeLogo = styled(Animatable.Image)`
  width: 100%;
  height: 150px;
`;

export {AnimeScreenContainer, AnimeLogo};
