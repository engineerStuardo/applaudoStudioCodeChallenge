import React from 'react';
import {FlatList, Dimensions} from 'react-native';

import {CardList} from './CardList';
import {ListLoader} from './ListLoader';
import {ListImageContainer} from '../Styles/ListImagesStyles';

const {width, height} = Dimensions.get('screen');

export const ListImages = ({
  dataList,
  loadingSearch,
  search,
  resetList,
  getData,
  loading,
}) => {
  return (
    <ListImageContainer containerWidth={width}>
      {dataList && !loadingSearch && (
        <FlatList
          onEndReached={search ? () => resetList() : () => getData()}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() => <ListLoader loading={loading} />}
          numColumns={2}
          data={dataList}
          renderItem={dataItem => <CardList dataItem={dataItem} />}
          keyExtractor={dataItem => dataItem.id}
        />
      )}
    </ListImageContainer>
  );
};
