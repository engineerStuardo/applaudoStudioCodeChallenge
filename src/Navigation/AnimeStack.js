import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AnimeScreen} from '../Screens/AnimeScreen';
import {AnimeDetail} from '../Components/AnimeDetail';

const Stack = createStackNavigator();

export const AnimeStack = () => (
  <Stack.Navigator initialRouteName={'AnimeScreen'}>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name={'AnimeScreen'}
      component={AnimeScreen}
    />
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name={'AnimeDetail'}
      component={AnimeDetail}
    />
  </Stack.Navigator>
);
