import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {MangaScreen} from '../Screens/MangaScreen';
import {Detail} from '../Components/Detail';

const Stack = createStackNavigator();

export const MangaStack = () => (
  <Stack.Navigator initialRouteName={'MangaScreen'}>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name={'MangaScreen'}
      component={MangaScreen}
    />
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name={'MangaDetail'}
      component={Detail}
    />
  </Stack.Navigator>
);
