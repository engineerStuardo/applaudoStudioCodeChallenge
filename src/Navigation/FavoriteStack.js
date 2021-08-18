import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {FavoriteScreen} from '../Screens/FavoriteScreen';
import {AnimeDetail} from '../Components/AnimeDetail';

const Stack = createStackNavigator();

export const FavoriteStack = () => (
  <Stack.Navigator initialRouteName={'FavoriteScreen'}>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="FavoriteScreen"
      component={FavoriteScreen}
    />
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name={'AnimeFavoriteDetail'}
      component={AnimeDetail}
    />
  </Stack.Navigator>
);
