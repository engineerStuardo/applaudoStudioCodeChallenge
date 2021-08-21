import React, {useState} from 'react';
import {ScrollView, Dimensions} from 'react-native';

import {
  MainContainer,
  TextContainer,
  MainTitle,
  CardInfoContainer,
} from '../Styles/HomeScreenStyles';
import {PersonalInfoCard} from '../Components/PersonalInfo';
import {ProfessionalInfoCard} from '../Components/ProfessionalInfo';
import {useOrientation} from '../CustomHooks/useOrientation';

export const HomeScreen = () => {
  const orientation = useOrientation();

  return (
    <ScrollView>
      <MainContainer>
        <TextContainer animation="jello" iterationCount="infinite">
          <MainTitle animation="slideInLeft">Hire Me, Please??</MainTitle>
        </TextContainer>
        <CardInfoContainer
          isPortrait={orientation.isPortrait}
          orientation={orientation}>
          <PersonalInfoCard isPortrait={orientation.isPortrait} />
          <ProfessionalInfoCard
            isPortrait={orientation.isPortrait}
            orientation={orientation}
          />
        </CardInfoContainer>
      </MainContainer>
    </ScrollView>
  );
};
