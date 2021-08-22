import React from 'react';
import {FlatList} from 'react-native';

import {CardList} from './CardList';
import {ListLoader} from './ListLoader';
import {ListImageContainer} from '../Styles/ListImagesStyles';
import {useOrientation} from '../CustomHooks/useOrientation';

export const ListImages = ({
  dataList,
  loadingSearch,
  searchText,
  getMoreDataBySearch,
  getData,
  loading,
}) => {
  const listFooter = () => <ListLoader loading={loading} />;
  const renderItem = dataItem => <CardList dataItem={dataItem} />;
  const keyExtractor = dataItem => dataItem.id;
  const orientation = useOrientation();

  return (
    <ListImageContainer
      animation="swing"
      iterationCount={2}
      isPortrait={orientation.isPortrait}
      orientation={orientation}>
      {dataList && !loadingSearch && (
        <FlatList
          key={orientation.isPortrait && 2}
          onEndReached={
            searchText ? () => getMoreDataBySearch() : () => getData()
          }
          onEndReachedThreshold={0.5}
          ListFooterComponent={listFooter}
          numColumns={orientation.isPortrait && 2}
          horizontal={orientation.isPortrait ? false : true}
          data={dataList}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          persistentScrollbar={true}
        />
      )}
    </ListImageContainer>
  );
};
