import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import {TextInput} from 'react-native-paper';

import {getAnimeData} from '../Services/Services';
import {CardList} from '../Components/CardList';
import {ListLoader} from '../Components/ListLoader';

export const AnimeScreen = () => {
  const [animes, setAnimes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{padding: 25}}>
        <TextInput
          label="Search Anime"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center', marginTop: 0}}>
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
