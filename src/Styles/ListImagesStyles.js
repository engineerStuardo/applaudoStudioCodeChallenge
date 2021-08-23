import {View} from 'react-native';
import styled from 'styled-components/native';

const ListImageContainer = styled(View)`
  flex: 1;
  width: 360px;
  align-items: center;
  margin-top: ${({isPortrait, orientation}) =>
    isPortrait || orientation.width <= 780 ? '0px' : '20px'};
`;

export {ListImageContainer};
