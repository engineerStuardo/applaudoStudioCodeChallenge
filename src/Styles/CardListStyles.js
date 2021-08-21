import {Image} from 'react-native';
import styled from 'styled-components/native';

const CardImage = styled(Image)`
  width: 125px;
  height: ${props =>
    props.isPortrait
      ? '225px'
      : props.orientation.width < 700
      ? '215px'
      : '250px'};
  margin: 20px;
  border-radius: 25px;
`;

export {CardImage};
