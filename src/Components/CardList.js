import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

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
        posterImage: {original},
      },
    },
  } = anime;

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AnimeDetail', {animeId: anime.item.id})
        }>
        <Image
          style={{width: 125, height: 225, margin: 20, borderRadius: 25}}
          source={{
            uri: original,
          }}
        />
      </TouchableOpacity>
      <FavouriteButton onPress={() => console.log('icon')}>
        <Icon name={'heart'} size={35} color={'#919191'} />
      </FavouriteButton>
    </View>
  );
};
