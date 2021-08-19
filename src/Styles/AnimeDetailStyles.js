import {Image, TouchableOpacity, View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

const GoBackButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 999;
`;

const YoutubeButton = styled(TouchableOpacity)`
  position: absolute;
  top: 270px;
  left: 70px;
  z-index: 99999;
`;

const NoVideoText = styled(TouchableOpacity)`
  position: absolute;
  top: 270px;
  left: 33px;
  z-index: 99999;
`;

const CoverImageContainer = styled(Animatable.View)`
  position: absolute;
  top: 0;
  z-index: 9;
`;

const CoverImage = styled(Image)`
  width: ${props => `${props.coverWidth}px`};
  height: ${props => `${props.coverHeight / 1.5}px`};
`;

const AnimeDescriptionContainer = styled(Animatable.View)`
  z-index: 10;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: white;
  margin-top: ${props => `${props.heightMargin / 2.5}px`};
`;

const SynopsisContainer = styled(View)`
  padding: 25px;
  align-items: center;
`;

const SynopsisText = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 20px;
`;

const ShowMoreText = styled(Text)`
  margin-top: 10px;
  color: orange;
`;

export {
  GoBackButton,
  YoutubeButton,
  NoVideoText,
  CoverImageContainer,
  CoverImage,
  AnimeDescriptionContainer,
  SynopsisContainer,
  SynopsisText,
  ShowMoreText,
};
