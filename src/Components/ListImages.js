import React from 'react';
import {FlatList, Dimensions} from 'react-native';

import {CardList} from './CardList';
import {ListLoader} from './ListLoader';
import {ListImageContainer} from '../Styles/ListImagesStyles';

const {width} = Dimensions.get('screen');

export const ListImages = ({
  dataList,
  loadingSearch,
  search,
  getDataByTextSearch,
  getData,
  loading,
}) => {
  const listFooter = () => <ListLoader loading={loading} />;
  const renderItem = dataItem => <CardList dataItem={dataItem} />;
  const keyExtractor = dataItem => dataItem.id;

  return (
    <ListImageContainer containerWidth={width}>
      {dataList && !loadingSearch && (
        <FlatList
          onEndReached={search ? () => getDataByTextSearch() : () => getData()}
          onEndReachedThreshold={0.5}
          ListFooterComponent={listFooter}
          numColumns={2}
          data={dataList}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </ListImageContainer>
  );
};
