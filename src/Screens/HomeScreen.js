import React from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

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

  const state = useSelector(state => state.seriesReducer);
  // console.log(JSON.stringify(state, null, 2));

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
