import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';

const AnimeDescriptionContainer = styled(View)`
  flex: 0;
  flex-direction: row;
`;

const AnimeImage = styled(Image)`
  width: 150px;
  height: 250px;
  margin: 15px;
  border-radius: 15px;
`;

const AnimeInfoContainer = styled(View)`
  justify-content: center;
  width: ${props => `${props.animeWidth / 2}px`};
`;

const TitleText = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  color: orange;
`;

const SubTitleText = styled(Text)`
  font-size: 15px;
  font-weight: bold;
`;

export {
  AnimeDescriptionContainer,
  AnimeImage,
  AnimeInfoContainer,
  TitleText,
  SubTitleText,
};
