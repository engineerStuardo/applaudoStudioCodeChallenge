import {
  Image,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from 'react-native';
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
  left: 50px;
  z-index: 99999;
`;

const ShareButton = styled(TouchableOpacity)`
  position: absolute;
  top: ${({videoAvailable}) => `${videoAvailable ? 270 : 295}px`};
  left: ${({videoAvailable}) => `${videoAvailable ? 100 : 74}px`};
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
  width: ${({coverWidth}) => `${coverWidth}px`};
  height: ${({coverHeight}) => `${coverHeight / 1.5}px`};
`;

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  resize-mode: cover;
  justify-content: center;
`;

const DetailMainContainer = styled(View)`
  align-items: center;
`;

const DescriptionContainer = styled(Animatable.View)`
  z-index: 10;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: ${({isPortrait}) =>
    isPortrait ? 'white' : 'rgba(255, 255, 255, 0.8)'};
  width: ${({isPortrait}) => (isPortrait ? '100%' : '450px')};
  margin-top: ${({isPortrait}) => (isPortrait ? `205px` : '30px')};
  margin-bottom: ${({isPortrait}) => (isPortrait ? '0px' : '30px')};
  border-bottom-left-radius: ${({isPortrait}) => (isPortrait ? '0px' : '50px')};
  border-bottom-right-radius: ${({isPortrait}) =>
    isPortrait ? '0px' : '50px'};
`;

const SynopsisContainer = styled(View)`
  padding: 25px;
  align-items: center;
  margin-top: 20px;
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
  ShareButton,
  NoVideoText,
  CoverImageContainer,
  CoverImage,
  BackgroundImage,
  DetailMainContainer,
  DescriptionContainer,
  SynopsisContainer,
  SynopsisText,
  ShowMoreText,
};
