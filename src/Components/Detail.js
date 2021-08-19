import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';

import {ListLoader} from './ListLoader';
import {getDataById} from '../Services/Services';
import {TopCoverImage} from './CoverImage';
import {DetailContainer} from './DetailContainer';

export const Detail = ({route, navigation}) => {
  const {animeId, isFavorite, type} = route.params;
  const [anime, setAnime] = useState();
  const [loading, setLoading] = useState(false);
  const [moreSynopsis, setMoreSynopsis] = useState(false);

  const getAnimeDetail = async () => {
    try {
      setLoading(true);
      const data = await getDataById(type, animeId);
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
          <DetailContainer
            anime={anime}
            moreSynopsis={moreSynopsis}
            setMoreSynopsis={setMoreSynopsis}
          />
        </>
      )}
    </ScrollView>
  );
};
