import React, {useState, useEffect} from 'react';
import {View, FlatList, Dimensions, Image, Keyboard} from 'react-native';
import {TextInput, Colors} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

import {getAnimeData, getAnimeSearch} from '../Services/Services';
import {CardList} from '../Components/CardList';
import {ListLoader} from '../Components/ListLoader';
import {InputText} from '../Components/InputText';
import {ListAnimeImages} from '../Components/ListAnimeImages';
import {AnimeScreenContainer, AnimeLogo} from '../Styles/AnimeScreenStyles';

const {width, height} = Dimensions.get('screen');

export const AnimeScreen = () => {
  const [animes, setAnimes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [search, setSearch] = useState();

  const getData = async start => {
    if (!loading) {
      setLoading(true);
      try {
        if (start) {
          const data = await getAnimeData(0);
          setAnimes(data);
          setOffset(10);
        } else {
          const data = await getAnimeData(offset);
          setAnimes([...animes, ...data]);
          setOffset(offset + 10);
        }
      } catch (error) {
        console.log(err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
  };

  const searchAnime = async text => {
    try {
      setLoadingSearch(true);
      const data = await getAnimeSearch(text);
      setAnimes(data);
    } catch (error) {
      console.log(err);
      setLoadingSearch(false);
    } finally {
      setLoadingSearch(false);
    }
  };

  const resetList = async () => {
    try {
      setLoading(true);
      const data = await getAnimeSearch(search, offset);
      setAnimes([...animes, ...data]);
      setOffset(offset + 10);
    } catch (error) {
      console.log(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
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
      <ListAnimeImages
        animes={animes}
        loadingSearch={loadingSearch}
        search={search}
        resetList={resetList}
        getData={getData}
        loading={loading}
      />
    </AnimeScreenContainer>
  );
};
