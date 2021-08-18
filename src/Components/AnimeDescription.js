import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styled from 'styled-components/native';

import {FavoriteButton} from '../Components/FavouriteButton';
import {useFavoritesContext} from '../Context/FavoritesCustomHook';

const {width, height} = Dimensions.get('screen');

export const AnimeDescription = ({anime}) => {
  const {favorites} = useFavoritesContext();
  const isFavorite = favorites.find(item => item.id === anime.id);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <Image
        style={{width: 150, height: 250, margin: 15, borderRadius: 15}}
        source={{
          uri: anime.attributes.posterImage.original,
        }}
      />
      <View>
        <FavoriteButton anime={anime} isFavorite={isFavorite} isDescription />
      </View>
      <View
        style={{
          justifyContent: 'center',
          // backgroundColor: 'red',
          width: width / 2,
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
          {anime.attributes.titles.en || anime.attributes.titles.en_jp}
        </Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          Popularity Rank:{' '}
        </Text>
        <Text>{anime.attributes.popularityRank || 'Not Found'}</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Rating Rank:</Text>
        <Text> {anime.attributes.ratingRank || 'Not Found'}</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Episode Count:</Text>
        <Text> {anime.attributes.episodeCount || 'Not Found'}</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Episode Length:</Text>
        <Text> {anime.attributes.episodeLength || 'Not Found'}</Text>
      </View>
    </View>
  );
};
