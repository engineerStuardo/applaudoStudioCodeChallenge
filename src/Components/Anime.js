import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {getFullData, getSearch} from '../Services/Services';
import {ListLoader} from '../Components/ListLoader';
import {InputText} from '../Components/InputText';
import {ListImages} from '../Components/ListImages';
import {ScreenContainer, Logo} from '../Styles/ScreenStyles';
import {useOrientation} from '../CustomHooks/useOrientation';

export const Anime = () => {
  const [animes, setAnimes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [searchText, setSearchText] = useState();
  const [type, setType] = useState('anime');
  const orientation = useOrientation();

  const getData = async start => {
    try {
      setLoading(true);
      if (start) {
        const data = await getFullData(type, 0);
        setAnimes(data);
        setOffset(10);
      } else {
        const data = await getFullData(type, offset);
        setAnimes([...animes, ...data]);
        setOffset(offset + 10);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const searchCategoryByText = async text => {
    try {
      setLoadingSearch(true);
      const data = await getSearch(type, text);
      setAnimes(data);
    } catch (error) {
      console.log(error);
      setLoadingSearch(false);
    } finally {
      setLoadingSearch(false);
    }
  };

  const getMoreDataBySearch = async () => {
    try {
      setLoading(true);
      const data = await getSearch(type, searchText, offset);
      setAnimes([...animes, ...data]);
      setOffset(offset + 10);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {animes.length === 0 ? (
        <ListLoader loading />
      ) : (
        <ScreenContainer isPortrait={orientation.isPortrait}>
          <View>
            <InputText
              isPortrait={orientation.isPortrait}
              searchText={searchText}
              setSearchText={setSearchText}
              searchCategoryByText={searchCategoryByText}
              getData={getData}
            />
            <Logo
              animation="pulse"
              iterationCount="infinite"
              source={require('../Assets/Images/anime.png')}
            />
          </View>
          {loadingSearch && <ListLoader loadingSearch />}
          <ListImages
            dataList={animes}
            loadingSearch={loadingSearch}
            searchText={searchText}
            getMoreDataBySearch={getMoreDataBySearch}
            getData={getData}
            loading={loading}
          />
        </ScreenContainer>
      )}
    </>
  );
};
