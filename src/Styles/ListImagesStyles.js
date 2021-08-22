import {View} from 'react-native';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

const ListImageContainer = styled(Animatable.View)`
  flex: 1;
  width: 360px;
  align-items: center;
  margin-top: ${({isPortrait, orientation}) =>
    isPortrait || orientation.width <= 780 ? '0px' : '20px'};
`;

export {ListImageContainer};
