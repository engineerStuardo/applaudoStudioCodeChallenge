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

export const HomeScreen = () => {
  const [orientation, setOrientation] = useState();

  Dimensions.addEventListener('change', () => {
    const dim = Dimensions.get('screen');
    const isPortrait = dim.height >= dim.width;
    setOrientation(isPortrait ? 'portrait' : 'landscape');
  });

  return (
    <ScrollView>
      <MainContainer>
        <TextContainer animation="jello" iterationCount="infinite">
          <MainTitle animation="slideInLeft">Hire Me, Please??</MainTitle>
        </TextContainer>
        <CardInfoContainer orientation={orientation}>
          <PersonalInfoCard orientation={orientation} />
          <ProfessionalInfoCard orientation={orientation} />
        </CardInfoContainer>
      </MainContainer>
    </ScrollView>
  );
};
