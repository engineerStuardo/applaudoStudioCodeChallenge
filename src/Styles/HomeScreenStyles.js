import {View} from 'react-native';
import {Avatar, Paragraph} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

const MainContainer = styled(View)`
  flex: 1;
`;

const TextContainer = styled(Animatable.View)`
  background-color: orange;
  align-items: center;
`;

const MainTitle = styled(Animatable.Text)`
  color: white;
  font-weight: bold;
  font-size: 45px;
  margin-top: 30px;
  margin-bottom: 80px;
`;

const CardInfoContainer = styled(View)`
  width: 100%;
  padding: 15px;
  margin-top: -80px;
  align-items: center;
  justify-content: center;
  flex-direction: ${props =>
    props.isPortrait || props.orientation.width < 700 ? 'column' : 'row'};
`;

const PersonalInfoMainContainer = styled(Animatable.View)`
  width: ${props => (props.isPortrait ? '100%' : '350px')};
`;

const PersonalInfoTitleContainer = styled(Animatable.View)`
  align-items: center;
  margin-top: 25px;
`;

const PersonalInfoContainer = styled(View)`
  align-items: center;
  margin-bottom: 5px;
  padding: 30px;
`;

const AvatarContainer = styled(View)`
  margin-bottom: 25px;
`;

const AvatarPhoto = styled(Avatar.Image)`
  background-color: orange;
`;

const ProfessionalInfoContainer = styled(Animatable.View)`
  width: ${props => (props.isPortrait ? '100%' : '350px')};
  margin-top: ${props =>
    props.isPortrait || props.orientation.width < 700 ? '25px' : '0px'};
  margin-left: ${props =>
    props.isPortrait || props.orientation.width < 700 ? '0px' : '10px'}; ;
`;

const ProfessionalTitleContainer = styled(Animatable.View)`
  align-items: center;
  margin-top: 25px;
`;

const ProfessionalInfo = styled(View)`
  align-items: center;
  margin-bottom: 5px;
  padding: 30px;
`;

const ProfessionalAvatarContainer = styled(View)`
  margin-bottom: 45px;
`;

const ProfessionalAvatarPhoto = styled(Avatar.Image)`
  background-color: orange;
`;

const FirstJobContainer = styled(View)`
  margin-top: 50px;
  align-items: center;
`;

const TechContainer = styled(Paragraph)`
  height: 50px;
  padding-top: 20px;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled(Animatable.View)`
  flex: 1;
  flex-direction: row;
`;

export {
  MainContainer,
  TextContainer,
  MainTitle,
  CardInfoContainer,
  PersonalInfoMainContainer,
  PersonalInfoTitleContainer,
  PersonalInfoContainer,
  AvatarContainer,
  AvatarPhoto,
  ProfessionalInfoContainer,
  ProfessionalTitleContainer,
  ProfessionalInfo,
  ProfessionalAvatarContainer,
  ProfessionalAvatarPhoto,
  FirstJobContainer,
  TechContainer,
  IconContainer,
};
