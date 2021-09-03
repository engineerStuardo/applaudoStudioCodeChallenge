import React from 'react';
import {View, Text} from 'react-native';

import {ListLoader} from '../Components/ListLoader';
import {InputText} from '../Components/InputText';
import {ListImages} from '../Components/ListImages';
import {ScreenContainer, Logo, NotFound} from '../Styles/ScreenStyles';
import {useOrientation} from '../CustomHooks/useOrientation';
import {useApi} from '../CustomHooks/useApi';

export const Anime = () => {
  const orientation = useOrientation();

  const {
    dataByCategory: animes,
    loading,
    searchCategoryByText,
    getMoreDataBySearch,
    loadingSearch,
    searchText,
    setSearchText,
    apiRequest,
  } = useApi('anime');

  return (
    <>
      {loading ? (
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
              source={require('../Assets/Images/anime.png')}
            />
          </View>
          {loadingSearch && <ListLoader loadingSearch />}
          {animes.length === 0 ? (
            <NotFound>
              <Text>No Anime was found... Try again.</Text>
            </NotFound>
          ) : (
            <ListImages
              dataList={animes}
              loadingSearch={loadingSearch}
              searchText={searchText}
              getMoreDataBySearch={getMoreDataBySearch}
              getData={apiRequest}
              loading={loading}
            />
          )}
        </ScreenContainer>
      )}
    </>
  );
};
