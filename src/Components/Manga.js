import React from 'react';
import {View} from 'react-native';

import {ListLoader} from '../Components/ListLoader';
import {InputText} from '../Components/InputText';
import {ListImages} from '../Components/ListImages';
import {ScreenContainer, Logo} from '../Styles/ScreenStyles';
import {useOrientation} from '../CustomHooks/useOrientation';
import {useApi} from '../CustomHooks/useApi';

export const Manga = () => {
  const orientation = useOrientation();

  const {
    dataByCategory: mangas,
    loading,
    searchCategoryByText,
    getMoreDataBySearch,
    loadingSearch,
    searchText,
    setSearchText,
    apiRequest,
  } = useApi('manga');

  return (
    <>
      {mangas.length === 0 ? (
        <ListLoader loading />
      ) : (
        <ScreenContainer
          animation="flipInY"
          isPortrait={orientation.isPortrait}>
          <View>
            <InputText
              isPortrait={orientation.isPortrait}
              searchText={searchText}
              setSearchText={setSearchText}
              searchCategoryByText={searchCategoryByText}
              getData={apiRequest}
            />
            <Logo
              animation="pulse"
              iterationCount="infinite"
              source={require('../Assets/Images/manga.png')}
            />
            {loadingSearch && <ListLoader loadingSearch />}
          </View>
          <ListImages
            dataList={mangas}
            loadingSearch={loadingSearch}
            searchText={searchText}
            getMoreDataBySearch={getMoreDataBySearch}
            getData={apiRequest}
            loading={loading}
          />
        </ScreenContainer>
      )}
    </>
  );
};
