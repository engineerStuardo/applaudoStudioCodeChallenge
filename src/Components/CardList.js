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
import styled from 'styled-components/native';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

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
      <FavouriteButton onPress={() => console.log('icon')}>
        <Icon name={'heart'} size={35} color={'orange'} />
      </FavouriteButton>
    </View>
  );
};
