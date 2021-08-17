import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';

import {getAnimeData} from '../Services/Services';

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
    <View>
      {animes && (
        <FlatList
          onEndReached={getData}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() => {
            return (
              <View>
                {loading && (
                  <ActivityIndicator color="black" style={{margin: 15}} />
                )}
              </View>
            );
          }}
          numColumns={2}
          data={animes}
          renderItem={({
            item: {
              attributes: {
                posterImage: {tiny},
              },
            },
          }) => {
            return (
              <>
                <Image
                  style={{width: 150, height: 250}}
                  source={{
                    uri: tiny,
                  }}
                />
              </>
            );
          }}
          keyExtractor={anime => anime.id}
        />
      )}
    </View>
  );
};
