import {View} from 'react-native';
import styled from 'styled-components/native';

const ListImageContainer = styled(View)`
  flex: 1;
  width: ${props => `${props.containerWidth}px`};
  align-items: center;
`;

export {ListImageContainer};
