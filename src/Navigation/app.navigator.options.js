import React from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const TAB_ICON = {
  Home: 'person-sharp',
  Anime: 'logo-apple-appstore',
  Manga: 'logo-markdown',
  Favorite: 'heart',
};

export const createScreenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    const iconName = TAB_ICON[route.name];
    return (
      <Icon name={iconName} size={size} color={focused ? 'orange' : 'gray'} />
    );
  },
  headerShown: false,
  tabBarActiveTintColor: 'orange',
  tabBarInactiveTintColor: 'gray',
  title: route.name === 'Home' ? 'Personal Info' : route.name,
});
