import React, {useState, useEffect} from 'react';

import {getFullData, getSearch} from '../Services/Services';
import {ListLoader} from '../Components/ListLoader';
import {InputText} from '../Components/InputText';
import {ListImages} from '../Components/ListImages';
import {AnimeScreenContainer, AnimeLogo} from '../Styles/AnimeScreenStyles';

export const Anime = () => {
  const [animes, setAnimes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [search, setSearch] = useState();
  const [type, setType] = useState('anime');

  const getData = async start => {
    if (!loading) {
      setLoading(true);
      try {
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

  const resetList = async () => {
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
        <AnimeScreenContainer>
          <InputText
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
          {loadingSearch && <ListLoader loadingSearch />}
          <ListImages
            dataList={animes}
            loadingSearch={loadingSearch}
            search={search}
            resetList={resetList}
            getData={getData}
            loading={loading}
          />
        </AnimeScreenContainer>
      )}
    </>
  );
};
