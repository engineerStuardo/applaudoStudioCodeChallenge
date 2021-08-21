import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {getFullData, getSearch} from '../Services/Services';
import {ListLoader} from '../Components/ListLoader';
import {InputText} from '../Components/InputText';
import {ListImages} from '../Components/ListImages';
import {AnimeScreenContainer, AnimeLogo} from '../Styles/AnimeScreenStyles';
import {useOrientation} from '../CustomHooks/useOrientation';

export const Anime = () => {
  const [animes, setAnimes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [search, setSearch] = useState();
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
        if (type && type === 'anime') {
          const data = await getFullData(type, offset);
          setAnimes([...animes, ...data]);
          setOffset(offset + 10);
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const searchAnime = async text => {
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

  const getDataByTextSearch = async () => {
    try {
      setLoading(true);
      const data = await getSearch(type, search, offset);
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
        <AnimeScreenContainer isPortrait={orientation.isPortrait}>
          <View>
            <InputText
              isPortrait={orientation.isPortrait}
              search={search}
              setSearch={setSearch}
              searchAnime={searchAnime}
              getData={getData}
            />
            <AnimeLogo
              animation="pulse"
              iterationCount="infinite"
              source={require('../Assets/Images/anime.png')}
            />
          </View>
          {loadingSearch && <ListLoader loadingSearch />}
          <ListImages
            dataList={animes}
            loadingSearch={loadingSearch}
            search={search}
            getDataByTextSearch={getDataByTextSearch}
            getData={getData}
            loading={loading}
          />
        </AnimeScreenContainer>
      )}
    </>
  );
};
