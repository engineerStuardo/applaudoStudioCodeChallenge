import React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';

import {
  ProfessionalInfoContainer,
  ProfessionalTitleContainer,
  ProfessionalInfo,
  ProfessionalAvatarContainer,
  ProfessionalAvatarPhoto,
  FirstJobContainer,
} from '../Styles/HomeScreenStyles';

export const ProfessionalInfoCard = ({orientation}) => {
  return (
    <ProfessionalInfoContainer
      animation="fadeInDownBig"
      orientation={orientation}>
      <Card>
        <ProfessionalTitleContainer animation="pulse" iterationCount="infinite">
          <Title>PROFESSIONAL INFO</Title>
        </ProfessionalTitleContainer>
        <ProfessionalInfo>
          <ProfessionalAvatarContainer>
            <ProfessionalAvatarPhoto
              size={180}
              source={require('../Assets/Images/work.jpg')}
            />
          </ProfessionalAvatarContainer>
          <Title>Job</Title>
          <Paragraph>Analyst Programmer</Paragraph>
          <Title>From - To</Title>
          <Paragraph>01/01/2020 - Actually</Paragraph>
          <Title>Company Name</Title>
          <Paragraph>Francisco Gavidia's University</Paragraph>
          <FirstJobContainer>
            <Title>Job</Title>
            <Paragraph>Technical Support</Paragraph>
            <Title>From - To</Title>
            <Paragraph>15/02/2015 - 31/10/2019</Paragraph>
            <Title>Company Name</Title>
            <Paragraph>TIGO El Salvador</Paragraph>
          </FirstJobContainer>
        </ProfessionalInfo>
      </Card>
    </ProfessionalInfoContainer>
  );
};
