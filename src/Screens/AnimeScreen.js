import React, {useState, useEffect} from 'react';
import {View, FlatList, Dimensions, Image, Keyboard} from 'react-native';
import {TextInput, Colors} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

import {getAnimeData, getAnimeSearch} from '../Services/Services';
import {CardList} from '../Components/CardList';
import {ListLoader} from '../Components/ListLoader';

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
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{padding: 25, paddingBottom: 15}}>
        <TextInput
          style={{height: 40}}
          mode="outlined"
          label="Search Anime"
          value={search}
          textContentType="name"
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={search => setSearch(search)}
          theme={{colors: {primary: 'orange'}}}
          onSubmitEditing={() => {
            searchAnime(search);
          }}
          right={
            <TextInput.Icon
              style={{marginTop: 12}}
              name="backspace"
              color={Colors.orange500}
              size={30}
              onPress={() => {
                const start = true;
                Keyboard.dismiss();
                setSearch('');
                getData(start);
              }}
            />
          }
        />
      </View>
      <Animatable.Image
        animation="pulse"
        iterationCount="infinite"
        style={{width: '100%', height: 150}}
        source={require('../Assets/Images/anime.png')}
      />
      {loadingSearch && <ListLoader loadingSearch />}
      <View
        style={{
          flex: 1,
          width: width,
          alignItems: 'center',
        }}>
        {animes && !loadingSearch && (
          <FlatList
            onEndReached={search ? () => resetList() : () => getData()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={() => <ListLoader loading />}
            numColumns={2}
            data={animes}
            renderItem={anime => <CardList anime={anime} />}
            keyExtractor={anime => anime.id}
          />
        )}
      </View>
    </View>
  );
};
