import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';

import {ListLoader} from '../Components/ListLoader';
import {getAnime} from '../Services/Services';
import {TopCoverImage} from '../Components/CoverImage';
import {AnimeDetailContainer} from '../Components/AnimeDetailContainer';

export const AnimeDetail = ({route, navigation}) => {
  const {animeId, isFavorite} = route.params;
  const [anime, setAnime] = useState();
  const [loading, setLoading] = useState(false);
  const [moreSynopsis, setMoreSynopsis] = useState(false);

  const getAnimeDetail = async () => {
    try {
      setLoading(true);
      const data = await getAnime(animeId);
      setAnime(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAnimeDetail();
  }, [animeId]);

  return (
    <ScrollView>
      {loading && <ListLoader loading />}
      {anime && (
        <>
          <TopCoverImage anime={anime} navigation={navigation} />
          <AnimeDetailContainer
            anime={anime}
            moreSynopsis={moreSynopsis}
            setMoreSynopsis={setMoreSynopsis}
          />
        </>
      )}
    </ScrollView>
  );
};
