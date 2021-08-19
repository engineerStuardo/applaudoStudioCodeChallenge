import React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

import {
  PersonalInfoTitleContainer,
  PersonalInfoContainer,
  AvatarContainer,
  AvatarPhoto,
} from '../Styles/HomeScreenStyles';

export const PersonalInfoCard = () => {
  return (
    <Animatable.View animation="fadeInUpBig">
      <Card>
        <PersonalInfoTitleContainer animation="pulse" iterationCount="infinite">
          <Title>PERSONAL INFO</Title>
        </PersonalInfoTitleContainer>
        <PersonalInfoContainer>
          <AvatarContainer>
            <AvatarPhoto
              size={180}
              source={require('../Assets/Images/foto.jpg')}
            />
          </AvatarContainer>
          <Title>Name</Title>
          <Paragraph>Italo Stuardo Cortez Silva</Paragraph>
          <Title>Degree</Title>
          <Paragraph>Computer Science Engineer</Paragraph>
          <Title>Age</Title>
          <Paragraph>30years old</Paragraph>
          <Title>Hobbies</Title>
          <Paragraph>
            Play Basketball, hang out with friends and family and of course lear
            more about React Natve
          </Paragraph>
        </PersonalInfoContainer>
      </Card>
    </Animatable.View>
  );
};
