import {View} from 'react-native';
import styled from 'styled-components/native';

const AnimeDescriptionContainer = styled(View)`
  padding-left: ${props => `${props.animeWidth / 150}px`};
  align-items: center;
  justify-content: center;
`;

export {AnimeDescriptionContainer};
