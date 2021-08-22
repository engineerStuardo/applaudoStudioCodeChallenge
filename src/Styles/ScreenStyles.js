import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

const ScreenContainer = styled(View)`
  flex: 1;
  background-color: #ffffff;
  flex-direction: ${({isPortrait}) => (isPortrait ? 'column' : 'row')};
  align-items: ${({isPortrait}) => (isPortrait ? 'stretch' : 'center')};
`;

const Logo = styled(Animatable.Image)`
  width: 100%;
  height: 150px;
`;

export {ScreenContainer, Logo};
