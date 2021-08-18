import React, {useState, useEffect} from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import {TextInput} from 'react-native-paper';

import {getAnimeData, getAnimeSearch} from '../Services/Services';
import {CardList} from '../Components/CardList';
import {ListLoader} from '../Components/ListLoader';

const {width, height} = Dimensions.get('screen');

export const AnimeScreen = () => {
  const [animes, setAnimes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();

  const getData = async () => {
    if (!loading) {
      setLoading(true);
      try {
        const data = await getAnimeData(offset);
        setAnimes([...animes, ...data]);
        setOffset(offset + 10);
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
      if (text === '') {
        setOffset(0);
        setAnimes([]);
        getData();
        return;
      }
      const data = await getAnimeSearch(text);
      console.log(data);
      setAnimes(data);
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{padding: 25}}>
        <TextInput
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
        />
      </View>
      <View
        style={{
          flex: 1,
          width: width,
          alignItems: 'center',
        }}>
        {animes && (
          <FlatList
            onEndReached={getData}
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
