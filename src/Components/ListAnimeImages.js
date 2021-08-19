import React, {useState, useEffect} from 'react';
import {View, FlatList, Dimensions, Image, Keyboard} from 'react-native';
import {TextInput, Colors} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

import {getAnimeData, getAnimeSearch} from '../Services/Services';
import {CardList} from '../Components/CardList';
import {ListLoader} from '../Components/ListLoader';
import {InputText} from '../Components/InputText';
import {AnimeLogo} from '../Styles/AnimeScreenStyles';
import {ListImageContainer} from '../Styles/ListAnimeImagesStyles';

const {width, height} = Dimensions.get('screen');

export const ListAnimeImages = ({
  animes,
  loadingSearch,
  search,
  resetList,
  getData,
  loading,
}) => {
  return (
    <ListImageContainer containerWidth={width}>
      {animes && !loadingSearch && (
        <FlatList
          onEndReached={search ? () => resetList() : () => getData()}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() => <ListLoader loading={loading} />}
          numColumns={2}
          data={animes}
          renderItem={anime => <CardList anime={anime} />}
          keyExtractor={anime => anime.id}
        />
      )}
    </ListImageContainer>
  );
};
