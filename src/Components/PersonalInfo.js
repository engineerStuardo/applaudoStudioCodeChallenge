import React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import {
  PersonalInfoMainContainer,
  PersonalInfoTitleContainer,
  PersonalInfoContainer,
  AvatarContainer,
  AvatarPhoto,
  TechContainer,
} from '../Styles/HomeScreenStyles';

export const PersonalInfoCard = ({isPortrait}) => {
  return (
    <PersonalInfoMainContainer animation="fadeInUpBig" isPortrait={isPortrait}>
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
          <Title>Phone</Title>
          <Paragraph>7682-2732</Paragraph>
          <Title>Email</Title>
          <Paragraph>ingeniero.stuardo@gmail.com</Paragraph>
          <Title>Tecnologies</Title>
          <TechContainer>
            <Icon name={'logo-react'} size={35} color={'#61DBFB'} />
            <Icon name={'logo-javascript'} size={35} color={'orange'} />
            <Icon name={'logo-css3'} size={35} color={'#2565AE'} />
            <Icon name={'logo-html5'} size={35} color={'#EF6127'} />
          </TechContainer>
          <Title>Hobbies</Title>
          <Paragraph>
            Play Basketball, hang out with friends and family and of course lear
            more about React Natve
          </Paragraph>
        </PersonalInfoContainer>
      </Card>
    </PersonalInfoMainContainer>
  );
};
