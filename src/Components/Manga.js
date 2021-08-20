import React, {useState, useEffect} from 'react';

import {getFullData, getSearch} from '../Services/Services';
import {ListLoader} from '../Components/ListLoader';
import {InputText} from '../Components/InputText';
import {ListImages} from '../Components/ListImages';
import {AnimeScreenContainer, AnimeLogo} from '../Styles/AnimeScreenStyles';

export const Manga = () => {
  const [mangas, setAnimes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [search, setSearch] = useState();
  const type = 'manga';

  const getData = async start => {
    if (!loading) {
      setLoading(true);
      try {
        if (start) {
          const data = await getFullData(type, 0);
          setAnimes(data);
          setOffset(10);
        } else {
          if (type) {
            const data = await getFullData(type, offset);
            setAnimes([...mangas, ...data]);
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
      setAnimes([...mangas, ...data]);
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
      {mangas.length === 0 ? (
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
            source={require('../Assets/Images/manga.png')}
          />
          {loadingSearch && <ListLoader loadingSearch />}
          <ListImages
            animes={mangas}
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
