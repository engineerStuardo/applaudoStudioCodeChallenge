import React from 'react';
import {FlatList, Dimensions} from 'react-native';

import {CardList} from './CardList';
import {ListLoader} from './ListLoader';
import {ListImageContainer} from '../Styles/ListImagesStyles';

const {width, height} = Dimensions.get('screen');

export const ListImages = ({
  animes,
  loadingSearch,
  search,
  resetList,
  getData,
  loading,
  type,
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
          renderItem={anime => <CardList type={type} anime={anime} />}
          keyExtractor={anime => anime.id}
        />
      )}
    </ListImageContainer>
  );
};
