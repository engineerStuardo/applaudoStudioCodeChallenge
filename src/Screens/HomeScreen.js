import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

export const HomeScreen = () => (
  <ScrollView>
    <View style={{flex: 1}}>
      <View style={{backgroundColor: 'orange', alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 45,
            marginTop: 30,
            marginBottom: 80,
          }}>
          Information
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          padding: 15,
          marginTop: -80,
        }}>
        <Card>
          <View
            style={{
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 20,
              padding: 30,
            }}>
            <View style={{marginBottom: 25}}>
              <Avatar.Image
                size={180}
                source={require('../Assets/Images/foto.jpg')}
              />
            </View>
            <Title>Name</Title>
            <Paragraph>Italo Stuardo Cortez Silva</Paragraph>
            <Title>Degree</Title>
            <Paragraph>Computer Science Engineer</Paragraph>
            <Title>Age</Title>
            <Paragraph>30years old</Paragraph>
            <Title>Actual job</Title>
            <Paragraph>Analyst Programmer</Paragraph>

            <Avatar.Image
              style={{marginTop: 5}}
              size={80}
              source={require('../Assets/Images/appladostudio.png')}
            />
          </View>
        </Card>
      </View>
    </View>
  </ScrollView>
);
