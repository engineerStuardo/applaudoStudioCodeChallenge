import React from 'react';
import {ScrollView} from 'react-native';

import {
  MainContainer,
  TextContainer,
  MainTitle,
  CardInfoContainer,
} from '../Styles/HomeScreenStyles';
import {PersonalInfoCard} from '../Components/PersonalInfo';
import {ProfessionalInfoCard} from '../Components/ProfessionalInfo';

export const HomeScreen = () => (
  <ScrollView>
    <MainContainer>
      <TextContainer animation="jello" iterationCount="infinite">
        <MainTitle animation="slideInLeft">Hire Me, Please??</MainTitle>
      </TextContainer>
      <CardInfoContainer>
        <PersonalInfoCard />
        <ProfessionalInfoCard />
      </CardInfoContainer>
    </MainContainer>
  </ScrollView>
);
