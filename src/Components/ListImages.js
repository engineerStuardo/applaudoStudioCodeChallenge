import React from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {CardList} from './CardList';
import {ListLoader} from './ListLoader';
import {ListImageContainer} from '../Styles/ListImagesStyles';
import {useOrientation} from '../CustomHooks/useOrientation';
import * as actions from '../Redux/Actions/seriesActions';

export const ListImages = ({dataList}) => {
  const orientation = useOrientation();
  const dispatch = useDispatch();
  const {searchText, type, loadingFooter, offsetAnime, offsetManga} =
    useSelector(state => state.seriesReducer);

  const listFooter = () => <ListLoader loadingFooter={loadingFooter} />;
  const renderItem = dataItem => <CardList dataItem={dataItem} />;
  const keyExtractor = dataItem => dataItem.id;

  return (
    <ListImageContainer
      isPortrait={orientation.isPortrait}
      orientation={orientation}>
      {dataList && (
        <FlatList
          key={orientation.isPortrait && 2}
          onEndReached={
            searchText
              ? () => getMoreDataBySearch()
              : () =>
                  !loadingFooter && type === 'anime'
                    ? dispatch(actions.getDataAnime(false, offsetAnime, true))
                    : dispatch(actions.getDataManga(false, offsetAnime, true))
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
