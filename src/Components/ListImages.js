import React from 'react';
import {FlatList, Dimensions} from 'react-native';

import {CardList} from './CardList';
import {ListLoader} from './ListLoader';
import {ListImageContainer} from '../Styles/ListImagesStyles';
import {useOrientation} from '../CustomHooks/useOrientation';

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
  const orientation = useOrientation();

  return (
    <ListImageContainer
      containerWidth={width}
      isPortrait={orientation.isPortrait}
      orientation={orientation}>
      {dataList && !loadingSearch && (
        <FlatList
          key={orientation.isPortrait && 2}
          onEndReached={search ? () => getDataByTextSearch() : () => getData()}
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
