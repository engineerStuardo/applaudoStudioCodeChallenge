import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';

const DescriptionContainer = styled(View)`
  flex: 0;
  flex-direction: row;
`;

const AvatarImage = styled(Image)`
  width: 150px;
  height: 250px;
  margin: 15px;
  border-radius: 15px;
`;

const InfoContainer = styled(View)`
  justify-content: center;
  margin-top: 10px;
  width: ${({isPortrait}) => (isPortrait ? '165px' : '190px')};
  margin-right: 50px;
`;

const TitleText = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  color: orange;
  text-align: auto;
`;

const SubTitleText = styled(Text)`
  font-size: 15px;
  font-weight: bold;
`;

export {
  DescriptionContainer,
  AvatarImage,
  InfoContainer,
  TitleText,
  SubTitleText,
};
