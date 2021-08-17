import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export const CardList = ({anime}) => {
  const {
    item: {
      attributes: {
        posterImage: {tiny},
      },
    },
  } = anime;

  return (
    <View>
      <TouchableOpacity onPress={() => console.log('image')}>
        <Image
          style={{width: 150, height: 250, margin: 15, borderRadius: 25}}
          source={{
            uri: tiny,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('icon')}>
        <View
          style={{
            position: 'absolute',
            top: -250,
            right: 25,
            zIndex: 9999,
            elevation: Platform.OS === 'android' ? 50 : 0,
          }}>
          <Icon name={'heart'} size={35} color={'gray'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
