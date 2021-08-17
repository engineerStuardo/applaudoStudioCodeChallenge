import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Divider,
} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

export const HomeScreen = () => (
  <ScrollView>
    <View style={{flex: 1}}>
      <View style={{backgroundColor: 'orange', alignItems: 'center'}}>
        <Animatable.Text
          animation="slideInLeft"
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 45,
            marginTop: 30,
            marginBottom: 80,
          }}>
          Information
        </Animatable.Text>
      </View>
      <View
        style={{
          width: '100%',
          padding: 15,
          marginTop: -80,
        }}>
        <Animatable.View animation="fadeInUpBig">
          <Card>
            <View style={{alignItems: 'center', marginTop: 25}}>
              <Title>PERSONAL INFO</Title>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginBottom: 5,
                padding: 30,
              }}>
              <Animatable.View
                animation="pulse"
                iterationCount="infinite"
                style={{marginBottom: 25}}>
                <Avatar.Image
                  style={{backgroundColor: 'orange'}}
                  size={180}
                  source={require('../Assets/Images/foto.jpg')}
                />
              </Animatable.View>
              <Title>Name</Title>
              <Paragraph>Italo Stuardo Cortez Silva</Paragraph>
              <Title>Degree</Title>
              <Paragraph>Computer Science Engineer</Paragraph>
              <Title>Age</Title>
              <Paragraph>30years old</Paragraph>
              <Title>Hobbies</Title>
              <Paragraph>
                Play Basketball, hang out with friends and family and of course
                lear more about React Natve
              </Paragraph>
            </View>
          </Card>
        </Animatable.View>
        <Animatable.View animation="fadeInDownBig" style={{marginTop: 25}}>
          <Card>
            <View style={{alignItems: 'center', marginTop: 25}}>
              <Title>PROFESSIONAL INFO</Title>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginBottom: 5,
                padding: 30,
              }}>
              <Animatable.View
                animation="pulse"
                iterationCount="infinite"
                style={{marginBottom: 25}}>
                <Avatar.Image
                  style={{backgroundColor: 'orange'}}
                  size={180}
                  source={require('../Assets/Images/work.jpg')}
                />
              </Animatable.View>
              <Divider />
              <Title>Job</Title>
              <Paragraph>Analyst Programmer</Paragraph>
              <Title>From - To</Title>
              <Paragraph>01/01/2020 - Actually</Paragraph>
              <Title>Company Name</Title>
              <Paragraph>Francisco Gavidia's University</Paragraph>
              <View style={{marginTop: 50, alignItems: 'center'}}>
                <Title>Job</Title>
                <Paragraph>Technical Support</Paragraph>
                <Title>From - To</Title>
                <Paragraph>15/02/2015 - 31/10/2019</Paragraph>
                <Title>Company Name</Title>
                <Paragraph>TIGO El Salvador</Paragraph>
              </View>
            </View>
          </Card>
        </Animatable.View>
      </View>
    </View>
  </ScrollView>
);
