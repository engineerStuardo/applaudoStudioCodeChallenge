import {View} from 'react-native';
import styled from 'styled-components/native';

const ListImageContainer = styled(View)`
  flex: 1;
  width: ${props => `360px`};
  align-items: center;
  margin-top: ${props =>
    props.isPortrait || props.orientation.width <= 780 ? '0px' : '20px'};
`;

export {ListImageContainer};
