import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import {HomeScreen} from '../Screens/HomeScreen';
import {AnimeStack} from './AnimeStack';
import {createScreenOptions} from './app.navigator.options';
import {FavoriteStack} from './FavoriteStack';

const Tab = createBottomTabNavigator();

export const MainNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      initialRouteName="Restaurant">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Anime" component={AnimeStack} />
      <Tab.Screen name="Favorite" component={FavoriteStack} />
    </Tab.Navigator>
  </NavigationContainer>
);
